<template>
  <NavigationBar v-if="isLoggedIn" :open="true" />
  <router-view v-if="isLoggedIn" />
  <login-view v-else />
</template>

<script>
import { defineComponent } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import LoginView from './views/LoginView.vue'

export default defineComponent({
  name: 'App',
  props: {
    isLoggedIn: Boolean
  },
  created () {
    console.log(this.isLoggedIn, 'isLoggedIn')
  },
  components: {
    NavigationBar,
    LoginView
  }
})
</script>

<style lang="scss">
@import './styles/variables';
@import './styles/utils';
@import './styles/index';

* {
  box-sizing: border-box;
}

body{
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
</style>
