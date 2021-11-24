import { Image, View } from '@tarojs/components'
import React from 'react'
import Button, { ButtonType } from '../Button'
import Drawer, { DrawerProps } from '../Drawer'

export declare namespace XIAO_KUI_MODAL {
  type Btn = {
    type?: ButtonType
    ghost?: boolean
    text: string
  }

  interface BaseProps {
    /** 按钮数组 */
    btn?: Btn[]
    /** 是否显示遮罩层 */
    mask?: boolean
    /** 点击蒙层是否允许关闭 */
    maskClosable?: boolean
    /** 风格 */
    type?: 'default' | 'notify' | 'upadte' | 'guide' | 'active'
    /** 内容 */
    content?: React.ReactNode
    /** 是否显示关闭按钮 */
    closable?: boolean
  }

  interface Props extends BaseProps {
    /** 是否可见 */
    visible: boolean
    /** 按钮点击回调 */
    onClick?(item: Btn, index: number): void
    /** 关闭回调 */
    onClose?(): void
  }

  interface Result {
    item: Btn
    index: number
  }
}





const HEAD_IMG_MAP = {
  default: 'https://assets.xrkmm.cn/u/4000002499670412/661d0be5-8f27-4478-978c-7f59b87ee877.png',
  notify: 'https://assets.xrkmm.cn/u/4000002499670412/db56b91e-fb14-4824-9141-63a85a306a3f.png',
  upadte: 'https://assets.xrkmm.cn/u/4000002499670412/333ab89b-95e9-48ae-88fe-f2b0e79e42cc.png',
  guide: 'https://assets.xrkmm.cn/u/4000002499670412/50447be8-8b75-4613-b39c-8675ec0e2133.png',
  active: 'https://assets.xrkmm.cn/u/4000002499670412/c0ba2f4a-4638-4101-8676-5681de2b1e5d.png'
}

const XiaokuiModal: React.FC<XIAO_KUI_MODAL.Props & DrawerProps> = ({
  type = 'default', onClick, children, btn, content, onClose, closable = true, ...props
}) => {

  return (
    <Drawer {...props} onClose={onClose} position="center" >
      <View className="xrk-xiaokui-modal" >
        <Image className="xrk-xiaokui-modal-head" src={HEAD_IMG_MAP[type]} />
        <View className="xrk-xiaokui-modal-body" >
          <View className="xrk-xiaokui-modal-content" >{content || children}</View>
          {Boolean(btn?.length) && (
            <View className="xrk-xiaokui-modal-btns" >
              {btn?.map((item, key) => (
                <Button
                  ghost={item.ghost}
                  type={item.type}
                  key={item.text}
                  onClick={(): void => onClick?.(item, key)}
                  size="big"
                  block
                  className="xrk-xiaokui-modal-btn"
                >
                  {item.text}
                </Button>
              ))}
            </View>
          )}
        </View>
        {closable &&  <View className="xrk-xiaokui-modal-close" data-testid="close" onClick={onClose} />}
      </View>
    </Drawer>
  )
}

export default XiaokuiModal
