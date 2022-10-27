import React, { useMemo, useRef, useState } from 'react'
import { Block, View } from '@tarojs/components'
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
  /** 是否自动聚焦 */
  focus?: boolean
  /** 点击输入框事件 */
  onClick?(event: ITouchEvent): void
  /** 输入发生改变事件 */
  onChange?(value: string): void
  /** 返回事件 */
  onBack?(): void
  /** 搜索事件 */
  onSearch?(value: string): void
  /** 清空事件 */
  onClear?(): void
  /** 聚焦事件 */
  onFocus?(): void
  /** 离焦事件 */
  onBlur?(): void
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
  onClick,
  onClear,
  onFocus,
  onBlur,
  focus
}) => {
  const [ isFouce, setIsFouce ] = useState(false)
  const searchForm = useRef<Form>()
  const valueLen = String(value || '').length

  const _class = useMemo(() => classNames('corn-search corn-f corn-ac', `corn-search-${type}`), [ type ])

  const _onInput = (event: BaseEventOrig<InputType.inputEventDetail>): void => {
    onChange?.(event.detail.value)
    setIsFouce(event.detail.value.length > 0)
  }

  const _onSubmit = (event: Record<string, unknown>): void => {
    const searchValue = event.value as string
    onSearch?.(searchValue)
  }

  const _onClear = (event: ITouchEvent): void => {
    event.stopPropagation()
    event.preventDefault()

    searchForm.current?.reset()
    setIsFouce(false)
    onChange?.('')
    onClear?.()
  }

  const _onFocus = (): void => {
    setIsFouce(true)
    onFocus?.()
  }
  const _onBlur = (event: BaseEventOrig<InputType.inputValueEventDetail>): void => {
    if (!event.detail.value) setIsFouce(false)
    onBlur?.()
  }

  const isShowClear = (allowClear && valueLen > 0) || (allowClear && isFouce)

  return (
    <Form onSubmit={_onSubmit} ref={searchForm as React.LegacyRef<Form>} >
      <View className={_class} >
        {back && <Icon className="corn-search-back" name="left" data-testid="back" onClick={onBack} />}

        <View
          className="corn-search-input-box corn-f corn-ac"
          data-testid="search-box"
          onClick={onClick}
        >
          <Icon name="search" className="corn-search-icon" />

          {openInput ? (
            <Input
              name="value"
              className="corn-search-input"
              value={value}
              onInput={_onInput}
              onFocus={_onFocus}
              onBlur={_onBlur}
              // #if _APP === 'weapp'
              onConfirm={(): void => searchForm.current?.submit()}
              // #endif
              autoComplete="off"
              confirmType="search"
              focus={focus}
            />
          ) : (
            <View className="corn-search-input" />
          )}

          <Block>
            {!isFouce && valueLen === 0 && <SearchPlaceholder data={placeholder} />}
          </Block>

          <Block>
            {isShowClear && (
              <View className="corn-search-clear corn-f corn-ac corn-jc" onClick={_onClear}>
                <Icon name="clear" />
              </View>
            )}
          </Block>

          <Button
            size="middle"
            className="corn-search-btn"
            data-testid="search-btn"
            formType="submit"
          >
            搜索
          </Button>
        </View>

        {Boolean(suffix) && <View className="corn-search-suffix corn-f xkr-ac" >{suffix}</View>}
      </View>
    </Form>
  )
}

export default Search
