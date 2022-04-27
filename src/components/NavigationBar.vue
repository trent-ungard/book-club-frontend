<template>
  <div class="navbar-wrapper">
    <h2 class="navbar-title">Xeno</h2>
    <hr />
    <nav v-if="open === true" class="bg-dark-shade border-sm-dark-tint">
      <ul>
        <li>
          <router-link to="/">
            <font-awesome-icon
              icon="home"
              class="pointer icon-sm color-light"
            />
            <p>Home</p>
          </router-link>
        </li>
        <hr />
        <li>
          <router-link to="/books">
            <font-awesome-icon
              icon="book"
              class="pointer icon-sm color-light"
            />
            <p>Books</p>
          </router-link>
        </li>
        <hr />
        <li>
          <router-link to="/clubs">
            <font-awesome-icon
              icon="user-group"
              class="pointer icon-sm color-light"
            />
            <p>Groups</p>
          </router-link>
        </li>
        <hr />
        <li>
          <router-link to="/search">
            <font-awesome-icon
              icon="search"
              class="pointer icon-sm color-light"
            />
            <p>Search</p>
          </router-link>
        </li>
      </ul>
    </nav>
    <font-awesome-icon
      v-if="open === true"
      @click="open = !open"
      icon="caret-up"
      class="pointer icon-md color-tertiary"
    />
    <font-awesome-icon
      v-else
      @click="open = !open"
      icon="caret-down"
      class="pointer icon-md color-tertiary"
    />
  </div>
</template>

<script lang="ts">
export default ({
  data () {
    return {
      open: false
    }
  }
})
</script>

<style lang="scss" scoped>
  @import '../styles/variables';

  .navbar-wrapper {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    left: 0;
    background-color: $dark-color;
    padding: 0 15px;
    .navbar-title{
      color: $light-color;
    }
    nav{
      transition: display 2s;
      margin: 10px 5px;
      padding: 15px;
    }
    hr{
      opacity: 0.5;
    }
    ul{
      list-style: none;
      margin: 0;
      padding: 0;
      li{
        margin: 10px 0;
      }
      a{
      color: $light-color;
      text-decoration: none;
      opacity: 0.65;
        &.router-link-exact-active {
          opacity: 1;
          .icon-sm {
            opacity: 1;
          }
        }
        p {
          font-size: 0.75rem;
        }
      }
    }
  }

  @media screen and (min-width: $medium) {
    .navbar-wrapper{
      max-width: 110px;
    }
  }
</style>
