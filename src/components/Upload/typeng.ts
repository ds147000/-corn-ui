import { Upload } from './base'
import { InputMaskProps } from './inputMask/typeing'

export type HandelUpload = (file: FileList) => Promise<Upload.Media[]>

export interface UploadProps {
  /** 表单名称 */
  name?: string
  /** 图片项类名 */
  itemClassName?: string
  /** 是否开启多选 */
  multiple?: boolean
  /** 最多数量 */
  count?: number
  /** 布局类型 */
  layout?: Upload.layout
  /** 已经上传文件对象 */
  list?: Upload.Media[]
  /** 文件类型 */
  type?: 'video' | 'image' | 'all'
  /** 自定义按钮渲染 */
  btn?(props: InputMaskProps): JSX.Element
  /** 上传前触发的钩子，返回true终止上传。参数 file:当前选择文件，list: 当前已经上传的列表 */
  beforUpload?(file: FileList, list: Upload.Media[]): boolean
  /** 单独设置处理上传方法 */
  handelUpload?: HandelUpload
}
