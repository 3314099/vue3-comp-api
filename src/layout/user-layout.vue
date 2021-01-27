<template>
  <TheNavbar />
  <div class="container with-nav">
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'

export default {
  name: 'user-layout',
  components: { TheNavbar }
}
</script>

<style scoped>

</style>
