export interface InputMaskProps {
  type: 'video' | 'image' | 'all'
  multiple: boolean
  onChange?(file: FileList): void
  onMpChange?(file: string[]): void
}
