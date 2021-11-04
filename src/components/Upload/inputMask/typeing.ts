export interface InputMaskProps {
  type: 'video' | 'image' | 'all'
  name?: string
  multiple: boolean
  onChange(file: FileList): void
}
