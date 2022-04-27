<template>
  <div class="book-wrapper">
    <h1>Search</h1>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';

.book-wrapper{
    border: $border-sm-dark-tint;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    title: String,
    url: String,
    description: String
  }
})
</script>
