<script lang="tsx">
import { renderClassic } from '@/layout/components/useRenderLayout'
import { computed, defineComponent } from 'vue'
import { useDesign } from '@/hooks/useDesign'
import { useAppStore } from '@/store/modules/app'
const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')

export default defineComponent({
  name: 'Layout',
  setup() {
    const appStore = useAppStore()

    const layout = computed(() => appStore.getLayout)

    return () => (
      <section class={[prefixCls, `${prefixCls}__${layout.value}`, "w-[100%] h-[100%] relative"]}>
        {renderClassic()}
      </section>
    )
  }
})

</script>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-layout';

.@{prefix-cls} {
  background-color: var(--app-content-bg-color);
  :deep(.@{elNamespace}-scrollbar__view) {
    height: 100% !important;
  }
}
</style>
