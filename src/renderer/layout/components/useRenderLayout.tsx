import { ref } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import { ElScrollbar } from 'element-plus'
import ToolHeader from '@/layout/components/ToolHeader.vue'
import AppView from '@/layout/components/AppView.vue'
import { useDesign } from '@/hooks/useDesign'
import { TagsView } from '@/components/TagsView'

export const renderClassic = () => {

  const { getPrefixCls } = useDesign()

  const prefixCls = getPrefixCls('layout')

  const appStore = useAppStore()

  const collapse = ref(appStore.getCollapse)
  const tagsView = ref(appStore.getTagsView)
  const mobile = ref(appStore.mobile)
  const pageLoading = ref(appStore.pageLoading)

  return (
    <>
      <div
        class={[
          'absolute top-0 left-0 h-full layout-border__right',
          { '!fixed z-3000': mobile.value }
        ]}
      >
        <Logo
          class={[
            'bg-[var(--left-menu-bg-color)] relative',
            {
              '!pl-0': mobile.value && collapse.value,
              'w-[var(--left-menu-min-width)]': appStore.getCollapse,
              'w-[var(--left-menu-max-width)]': !appStore.getCollapse
            }
          ]}
          style="transition: all var(--transition-time-02);"
        ></Logo>
        <Menu class={['!h-[calc(100%-var(--logo-height))]']}></Menu>
      </div>
      <div
        class={[
          `${prefixCls}-content`,
          'absolute top-0 h-[100%]',
          {
            'w-[calc(100%-var(--left-menu-min-width))] left-[var(--left-menu-min-width)]':
              collapse.value && !mobile.value && !mobile.value,
            'w-[calc(100%-var(--left-menu-max-width))] left-[var(--left-menu-max-width)]':
              !collapse.value && !mobile.value && !mobile.value,
            'fixed !w-full !left-0': mobile.value
          }
        ]}
        style="transition: all var(--transition-time-02);"
      >
        <ElScrollbar
          v-loading={pageLoading.value}
          class={[
            `${prefixCls}-content-scrollbar`,
            {
              '!h-[calc(100%-var(--top-tool-height)-var(--tags-view-height))] mt-[calc(var(--top-tool-height)+var(--tags-view-height))]': tagsView.value,
              '!h-[calc(100%-var(--top-tool-height))] mt-[calc(var(--top-tool-height))]': !tagsView.value,
            }
          ]}
        >
          <div
            class={[
              'fixed top-0 left-0 z-10',
              {
                'w-[calc(100%-var(--left-menu-min-width))] !left-[var(--left-menu-min-width)]':
                  collapse.value && !mobile.value,
                'w-[calc(100%-var(--left-menu-max-width))] !left-[var(--left-menu-max-width)]':
                  !collapse.value && !mobile.value,
                '!w-full !left-0': mobile.value
              }
            ]}
            style="transition: all var(--transition-time-02);"
          >
            <ToolHeader
              class={[
                'bg-[var(--top-header-bg-color)]',
                {
                  'layout-border__bottom': !tagsView.value
                }
              ]}
            ></ToolHeader>

            {tagsView.value ? (
              <TagsView class="layout-border__bottom layout-border__top"></TagsView>
            ) : undefined}
          </div>

          <AppView></AppView>
        </ElScrollbar>
      </div>
    </>
  )
}
