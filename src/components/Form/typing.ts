/* eslint-disable no-magic-numbers */

export interface FromProps {
  /** 默认表单值 */
  defaultValue?: Record<string, unknown>
  /** 提交事件 */
  onSubmit?(result: Record<string, unknown>): void
  /** 重置事件 */
  onReset?(): void
}



