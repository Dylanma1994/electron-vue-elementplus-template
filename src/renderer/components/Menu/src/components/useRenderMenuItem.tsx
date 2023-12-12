import { useRenderMenuTitle } from './useRenderMenuTitle'
import { hasOneShowingChild } from '../helper'
import { isUrl } from '@/utils/is'
import { pathResolve } from '@/utils/routerHelper'
import { ElMenuItem, ElSubMenu } from 'element-plus'
import { useDesign } from '@/hooks/useDesign'

const { renderMenuTitle } = useRenderMenuTitle()

export const useRenderMenuItem = (menuMode = 'vertical') => {
  const renderMenuItem = (routers: AppRouteRecordRaw[], parentPath = '/') => {
    return routers.map((v) => {
      const meta = v.meta ?? {}
      if (!meta.hidden) {
        const { oneShowingChild, onlyOneChild } = hasOneShowingChild(v.children, v)
        const fullPath = isUrl(v.path) ? v.path : pathResolve(parentPath, v.path)

        // 只展示一个
        if (oneShowingChild && (!onlyOneChild?.children || onlyOneChild?.noShowingChildren) && !meta?.hidden) {
          return (
            <ElMenuItem index={onlyOneChild ? pathResolve(fullPath, onlyOneChild.path) : fullPath}>
              {{
                default: () => renderMenuTitle(onlyOneChild ? onlyOneChild?.meta : meta)
              }}
            </ElMenuItem>
          )
        } else {
          const { getPrefixCls } = useDesign()
          const preFixCls = getPrefixCls('menu-popper')
          // 展示多个
          return (
            <ElSubMenu
              index={fullPath}
              popperClass={menuMode === 'vertical' ? `${preFixCls}--vertical` : `${preFixCls}--horizontal`}
            >
              {{
                title: () => renderMenuTitle(meta),
                default: () => renderMenuItem(v.children!, fullPath)
              }}
            </ElSubMenu>
          )
        }
      }
    })
  }

  return {
    renderMenuItem
  }
}
