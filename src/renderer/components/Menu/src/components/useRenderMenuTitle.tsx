import { Icon } from '@/components/Icon'
import { useI18n } from '@/hooks/useI18n'
import { RouteMetaCustom } from '@/types/router'

export const useRenderMenuTitle = () => {
  const renderMenuTitle = (meta: RouteMetaCustom) => {
    const { t } = useI18n()
    const { title = 'Please set title', icon } = meta

    return icon ? (
      <>
        <Icon icon={meta.icon}></Icon>
        <span class="v-menu__title">{t(title as string)}</span>
      </>
    ) : (
      <span class="v-menu__title">{t(title as string)}</span>
    )
  }

  return {
    renderMenuTitle
  }
}
