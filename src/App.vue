<template>
  <NavigationBar :open="true" />
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar
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
