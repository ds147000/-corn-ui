/* eslint-disable no-magic-numbers */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import type { ViewProps } from '@tarojs/components/types/View'
import ClassNames  from 'classnames'
import { DateToTimestamp, fixNumber } from '../../utils'
import { SecondSchedulerDestotry, MinuteSchedulerApp, SecondSchedulerApp } from './SecondScheduler'
import { DefualtRenderItem } from './render'

const DAY_TIMESTAMP = 86400000
const MIN_TIMESTAMP = 60000
const HOUS_TIMESTAMP = 3600000

type TimeValue = {
  d: string
  h: string
  m: string
  s: string
}

export type TimeRenderItem = (timeType: 'day' | 'hous' | 'min' | 'sec', value: string, last?: boolean) => JSX.Element

export interface TimerProps extends ViewProps {
  /** 倒计时开始时间，可以是毫秒时间戳、日期字符串、日期对象 */
  startTime: number | string | Date
  /** 倒计时结束时间，可以是毫秒时间戳、日期字符串、日期对象 */
  endTime: number | string | Date
  /** 是否使用填充风格 */
  fill?: boolean
  /** 当剩余时间发现改变 */
  onChange?(TimeLeft: number): void
  /** 自定义返回时间项的渲染函数 */
  renderItem?: TimeRenderItem
}


const Timer: React.FC<TimerProps> = ({ startTime, endTime, onChange, renderItem, fill, className }) => {
  const [ timeValue, setTimeValue ] = useState<TimeValue>({ d: '', h: '', m: '', s: '' })

  const _class = useMemo(() => ClassNames(
    'xrk-timer xrk-if xrk-ac xrk-jc',
    fill && 'xrk-timer-fill',
    className
  ), [ fill, className ])

  const getTimeLeft = useCallback((): number => {
    if (endTime === startTime)
      return 0

    const start = DateToTimestamp(startTime)
    const end = DateToTimestamp(endTime)

    return end - start
  }, [ endTime, startTime ])

  useEffect(() => {
    let _time = getTimeLeft()

    if (_time <= 0) {
      setTimeValue({ s: '0', m: '0', h: '0', d: '' })
      return
    }

    let minDestory: SecondSchedulerDestotry, secDestory : SecondSchedulerDestotry

    // 销毁函数
    function runMinDestroyed(): void {
      if (minDestory) minDestory()
    }
    function runSecDestroyed(): void {
      if (secDestory) secDestory()
    }
    function destory(): void {
      runSecDestroyed()
      runMinDestroyed()
    }

    // 计算时间
    function runTime(interval: number): void {
      _time -= interval
      if (interval) onChange?.(_time)

      const s = fixNumber((_time % MIN_TIMESTAMP / 1000) | 0, 2)
      const m = fixNumber((_time % HOUS_TIMESTAMP / MIN_TIMESTAMP) | 0, 2)
      const h = fixNumber((_time % DAY_TIMESTAMP / HOUS_TIMESTAMP) | 0, 2)
      const d = (_time / DAY_TIMESTAMP) | 0
      const data = { s, m, h, d: d ? d + '' : '' }
      setTimeValue(data)

      // 倒计时结束销毁
      if (_time <= 0) {
        destory()
        return
      }


      // 大于一天半个小时，分钟调度
      if (_time > DAY_TIMESTAMP + (HOUS_TIMESTAMP / 2)) {
        runSecDestroyed() // 取消调度
        minDestory = MinuteSchedulerApp.add(runTime)
        return
      }

      runMinDestroyed() // 取消分钟调度
      secDestory = SecondSchedulerApp.add(runTime)
    }

    runTime(0)

    // eslint-disable-next-line consistent-return
    return destory
  }, [ getTimeLeft, onChange ])

  const _renderItem = renderItem || DefualtRenderItem
  return (
    <View className={_class}>
      {Boolean(timeValue.d) && (_renderItem('day', timeValue.d))}
      {_renderItem('hous', timeValue.h)}
      {_renderItem('min', timeValue.m, timeValue.d !== '')}
      {!timeValue.d && (_renderItem('sec', timeValue.s, timeValue.d === ''))}
    </View>
  )
}


export default Timer
