import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import { ElScrollbar } from 'element-plus'
import ToolHeader from '@/layout/components/ToolHeader.vue'
import { useTagsView } from '@/hooks/useTagsView'
import AppView from '@/layout/components/AppView.vue'


const appStore = useAppStore()

const collapse = computed(() => appStore.getCollapse)

const tagsView = computed(() => appStore.getTagsView)

export const useRenderLayout = () => {

  const renderClassic = () => {
    return (
      // jsx语法
      <>
        <div
          class={[
            'absolute top-0 left-0 h-full layout-border__right'
          ]}
        >
          <Logo
            class={[
              'bg-[var(--left-menu-bg-color)] relative',
              {
                'w-[var(--left-menu-min-width)]': appStore.getCollapse,
                'w-[var(--left-menu-max-width)]': !appStore.getCollapse
              }
            ]}
            style="transition: all var(--transition-time-02);"
          />
          <Menu class={['!h-[calc(100%-var(--logo-height))]']} />
        </div>
        <div>
          <ElScrollbar
            v-loading={true}
            class={[
              '!h-[calc(100%-var(--top-tool-height)-var(--tags-view-height))] mt-[calc(var(--top-tool-height)+var(--tags-view-height))]'
            ]}
          >
            <div
              class={[
                'fixed top-0 left-0 z-10',
                {
                  'w-[calc(100%-var(--left-menu-min-width))] !left-[var(--left-menu-min-width)]':
                  collapse.value,
                  'w-[calc(100%-var(--left-menu-max-width))] !left-[var(--left-menu-max-width)]':
                    !collapse.value
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

            </div>
          </ElScrollbar>

          <AppView></AppView>
        </div>
      </>
    )
  }
  return {
    renderClassic
  }
}
