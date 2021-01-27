<template>
  <nav class="navbar">
    <h3>VUE-3</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Заявки</router-link>
      </li>
      <li>
        <router-link to="/">Помощь</router-link>
      </li>
      <li>
        <router-link to="/">Сообщения</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'TheNavbar',
  setup () {
    const router = useRouter()
    const store = useStore()

    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/main')
      }
    }
  }
}
</script>

<style scoped>

</style>
