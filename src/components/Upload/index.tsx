/* eslint-disable no-magic-numbers */
import React from 'react'
import { DEFAULT_COUNT, Upload, UploadBase } from './base'
import { UploadDefaultBtn } from './btn'
import { HandelUpload, UploadProps } from './typeng'
import Toast from '../Toast'
import { InputMaskProps } from './inputMask/typeing'

interface UploadState {
  list: Upload.Media[]
  previewList: Upload.Media[]
}

const OPEN_MUTIPLE_COUNT = 2

class UploadComps extends React.Component<UploadProps, UploadState> {
  static handelUpload: HandelUpload
  /** 获取处理上传方法 */
  get handelUpload(): HandelUpload {
    return this.props.handelUpload || UploadComps.handelUpload
  }

  /** 当前文件类型 */
  get fileType(): 'all' | 'video' | 'image' {
    return this.props.type || 'all'
  }

  /** 是否开启多选 */
  get isMultiple(): boolean {
    return this.props.multiple ?? this.state.list.length - (this.props.count || DEFAULT_COUNT) < OPEN_MUTIPLE_COUNT
  }

  get count(): number {
    return this.props.count || DEFAULT_COUNT
  }

  state: UploadState = {
    list: [],
    previewList: []
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  onChange = (file: any): void => {
    if (this.props.beforUpload?.(file, this.state.list)) return
    if (this.checkListLen(file)) return

    // #if _APP === 'weapp'

    // #else
    this.onChangeOfH5(file)
    // #endif
  }

  onChangeOfH5 = async (file: FileList): Promise<void> => {
    const previewList = this.getPreviewUrl(file)
    this.setState({ previewList: previewList })

    try {

      const list = await this.handelUpload(file)
      this.setState({ list: [ ...this.state.list, ...list ], previewList: [] })
    } catch (error) {

      const errorPreview = previewList.map((item) => {
        item.status = 'error'
        return item
      })
      this.setState({ list: [ ...this.state.list, ...errorPreview ], previewList: [] })
      Toast.show(error.message)
    }
  }

  onRemove = (item: Upload.Media): void => {
    this.setState({
      list: this.state.list.filter((_item) => _item.content === item.content && _item.mediaId === item.mediaId)
    })
  }

  private checkListLen = (file: FileList): boolean => {
    const len = this.state.list.length + file.length
    if (len > this.count) {
      Toast.show('数量超出限制，请重新选择')
      return true
    }

    return false
  }

  private getPreviewUrl(file: FileList): Upload.Media[] {
    const list: Upload.Media[] = []
    for (let i = 0; i < file.length; i++) {
      list.push({ mediaId: Math.random(), content: URL.createObjectURL(file[i]), status: 'loading' })
    }
    return list
  }

  render(): JSX.Element {
    const btnProps: InputMaskProps = {
      type: this.fileType,
      onChange: this.onChange,
      name: this.props.name,
      multiple: this.isMultiple
    }

    const list = [ ...this.state.list, ...this.state.previewList ]

    return (
      <UploadBase
        {...this.props}
        list={list}
        onRemove={this.onRemove}
        btn={this.props.btn ? this.props.btn(btnProps) : <UploadDefaultBtn {...btnProps} />}
      />
    )
  }
}

UploadComps.handelUpload = async (_: FileList): Promise<Upload.Media[]> => {
  return Promise.reject(new Error('未配置上传方法'))
}

export default UploadComps
