<template>
  <component :is="layout" v-if="layout"/>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import UserLayout from '@/layout/user-layout'
import LandingLayout from '@/layout/landing-layout'
export default {
  components: { UserLayout, LandingLayout },
  setup () {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  }
}
</script>
<style>
</style>
