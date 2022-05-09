<template>
  <div class="login">
    <h1>Login</h1>
    <button @click="login">Log in</button>
  </div>
</template>
<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup () {
    const { loginWithRedirect } = useAuth0()
    console.log(window.location.origin, 'location')
    return {
      login: () => {
        loginWithRedirect()
      }
    }
  }
}
</script>
