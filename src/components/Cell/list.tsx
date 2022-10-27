import React, { useMemo } from 'react'
import ClassNames from 'classnames'
import { View } from '@tarojs/components'
import { ViewProps } from '../../types/View'

export interface CellListProps extends ViewProps {
  /** 是否显示边框 */
  line?: boolean
}

const CellList: React.FC<CellListProps> = ({ children, line, className, ...props }) => {
  const _class = useMemo(() => {
    return ClassNames(line && 'corn-cell-list-line', className)
  }, [ line, className ])

  return (
    <View {...props} className={_class}>
      {children}
    </View>
  )
}

export default CellList
