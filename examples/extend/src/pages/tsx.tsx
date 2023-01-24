import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

definePageRoute({
  meta: {
    title: 'TestTSXTitle',
  },
})

export default defineComponent({
  name: 'TestJSX',
  setup() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const route = useRoute()
    const metaTitle = computed(() => {
      return route.meta.title
    })
    return () => (
      <div>TestTSX title: { metaTitle.value }</div>
    )
  },
})
