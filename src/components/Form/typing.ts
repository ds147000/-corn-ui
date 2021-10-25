export interface FormProps {
  /** 默认表单值 */
  defaultValue?: Record<string, unknown>
  /** 提交事件 */
  onSubmit?(result: Record<string, unknown>): void
  /** 重置事件 */
  onReset?(): void
}

export interface FormClass {
  getValue(): Promise<Record<string, unknown>>
  submit(): void
  reset(): void
  setValue(data: Record<string, unknown>): void
}
