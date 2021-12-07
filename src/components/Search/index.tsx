import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import Icon from '../Icon'
import Form from '../Form'
import Input from '../Input'
import Button from '../Button'
import { BaseEventOrig, ITouchEvent } from '../../types'
import { Input as InputType } from '../../types/Input'
import { SearchPlaceholder } from './placeholder'

export interface SearchProps {
  /** 风格类型*/
  type?: 'default' | 'light'
  /** 启用返回按钮 */
  back?: boolean
  /** 尾部插入的节点内容 */
  suffix?: React.ReactNode
  /** 可以点击清除图标删除内容,是否开启 */
  allowClear?: boolean
  /** 可输入 */
  openInput?: boolean
  /** 提示占位语, 可以字符串和数组字符串。如果是传入字符串数组将启用滚动提示语动画 */
  placeholder?: string | string[]
  /** 搜索值 */
  value?: string
  /** 点击输入框事件 */
  onClick?(event: ITouchEvent): void
  /** 输入发生改变事件 */
  onChange?(value: string): void
  /** 返回事件 */
  onBack?(): void
  /** 搜索事件 */
  onSearch?(value: string): void
}

const Search: React.FC<SearchProps> = ({
  type,
  back,
  openInput,
  suffix,
  value,
  placeholder,
  allowClear = true,
  onChange,
  onSearch,
  onBack,
  onClick
}) => {
  const [ isFouce, setIsFouce ] = useState(false)
  const [ isClear, setIsClear ] = useState(false)
  const searchForm = useRef<Form>()
  const _class = useMemo(() => classNames('xrk-search xrk-f xrk-ac', `xrk-search-${type}`), [ type ])

  const _onInput = (event: BaseEventOrig<InputType.inputEventDetail>): void => {
    onChange?.(event.detail.value)
    if (allowClear) setIsClear(true)
  }

  const _onSubmit = (event: Record<string, unknown>): void => {
    const searchValue = event.value as string
    onSearch?.(searchValue)
  }

  const _onClear = (): void => {
    console.log('情况')
    searchForm.current?.reset()
    setIsClear(false)
    setIsFouce(false)
    onChange?.('')
  }

  const _onFouce = useCallback(() => setIsFouce(true), [])
  const _onBlur = useCallback((event: BaseEventOrig<InputType.inputValueEventDetail>) => {
    if (!event.detail.value) setIsFouce(false)
  }, [])

  return (
    <Form onSubmit={_onSubmit} ref={searchForm as React.LegacyRef<Form>} >
      <View className={_class} >
        {back && <Icon className="xrk-search-back" name="left" data-testid="back" onClick={onBack} />}

        <View
          className="xrk-search-input-box"
          data-testid="search-box"
          onClick={onClick}
        >
          <Icon name="search" className="xrk-search-icon" />
          {!isFouce && Boolean(value) === false && <SearchPlaceholder data={placeholder} />}

          {openInput ? (
            <Input
              name="value"
              className="xrk-search-input"
              value={value}
              onInput={_onInput}
              onFocus={_onFouce}
              onBlur={_onBlur}
              autoComplete="off"
            />
          ) : (
            <View className="xrk-search-input" />
          )}

          {allowClear && isClear && <Icon name="clear" className="xrk-search-clear" onClick={_onClear} />}

          <Button
            size="middle"
            className="xrk-search-btn"
            data-testid="search-btn"
            formType="submit"
          >
            搜索
          </Button>
        </View>
        {Boolean(suffix) && <View className="xrk-search-suffix xrk-f xkr-ac" >{suffix}</View>}
      </View>
    </Form>
  )
}

export default Search
