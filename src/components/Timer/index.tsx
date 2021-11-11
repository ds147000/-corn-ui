/* eslint-disable no-magic-numbers */
import React from 'react'
import { View } from '@tarojs/components'
import ClassNames from 'classnames'
import type { ViewProps } from '../../types/View'
import { DateToTimestamp, fixNumber } from '../../utils'
import { SecondSchedulerDestotry, MinuteSchedulerApp, SecondSchedulerApp } from './SecondScheduler'
import { DefualtRenderItem } from './render'

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

interface TimerState {
  timeValue: { d: string, h: string, m: string, s: string }
}

const DAY_TIMESTAMP = 86400000
const MIN_TIMESTAMP = 60000
const HOUS_TIMESTAMP = 3600000


class Timer extends React.Component<TimerProps, TimerState> {
  state = {
    timeValue: { d: '', h: '', m: '', s: '' }
  }

  // eslint-disable-next-line no-empty-function, @typescript-eslint/no-empty-function
  stopTime(): void { }

  getTimeLeft = (): number => {
    if (this.props.endTime === this.props.startTime)
      return 0

    const start = DateToTimestamp(this.props.startTime)
    const end = DateToTimestamp(this.props.endTime)

    return end - start
  }

  componentDidMount = (): void => {
    let _time = this.getTimeLeft()

    if (_time <= 0) {
      this.setState({ timeValue: { s: '0', m: '0', h: '0', d: '' } })
      return
    }

    let minDestory: SecondSchedulerDestotry, secDestory: SecondSchedulerDestotry

    // 销毁函数
    function runMinDestroyed(): void {
      if (minDestory) minDestory()
    }
    function runSecDestroyed(): void {
      if (secDestory) secDestory()
    }

    this.stopTime = function(): void {
      runSecDestroyed()
      runMinDestroyed()
    }

    // 计算时间
    const runTime = (interval: number): void => {
      _time -= interval
      if (interval) this.props.onChange?.(_time)

      const s = fixNumber((_time % MIN_TIMESTAMP / 1000) | 0, 2)
      const m = fixNumber((_time % HOUS_TIMESTAMP / MIN_TIMESTAMP) | 0, 2)
      const h = fixNumber((_time % DAY_TIMESTAMP / HOUS_TIMESTAMP) | 0, 2)
      const d = (_time / DAY_TIMESTAMP) | 0
      const data = { s, m, h, d: d ? d + '' : '' }
      this.setState({ timeValue: data })

      // 倒计时结束销毁
      if (_time <= 0) {
        this.stopTime()
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
  }

  componentWillUnmount(): void {
    this.stopTime()
  }

  render(): JSX.Element {
    const _class = ClassNames(
      'xrk-timer xrk-if xrk-ac xrk-jc',
      this.props.fill && 'xrk-timer-fill',
      this.props.className
    )

    const _renderItem = this.props.renderItem || DefualtRenderItem

    return (
      <View className={_class}>
        {Boolean(this.state.timeValue.d) && (_renderItem('day', this.state.timeValue.d))}
        {_renderItem('hous', this.state.timeValue.h)}
        {_renderItem('min', this.state.timeValue.m, this.state.timeValue.d !== '')}
        {!this.state.timeValue.d && (_renderItem('sec', this.state.timeValue.s, this.state.timeValue.d === ''))}
      </View>
    )
  }
}

export default Timer
