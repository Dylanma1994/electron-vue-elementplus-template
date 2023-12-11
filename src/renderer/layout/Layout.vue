<script lang="tsx">
import { renderClassic } from '@/layout/components/useRenderLayout'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <section class="w-[100%] h-[100%] relative">
        {renderClassic()}
      </section>
    )
  }
})

</script>

<style scoped lang="less">
</style>
