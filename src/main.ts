import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCaretDown, faCaretUp, faHome, faBook, faUserGroup, faSearch } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faCaretUp, faHome, faBook, faUserGroup, faSearch)

createApp(App)
  .use(router)
  .use(
    createAuth0({
      domain: 'dev-ooec7a6i.us.auth0.com',
      client_id: 'uPcmP7qq2wujvLlkHDCRMqwdv27VX5KU',
      redirect_uri: window.location.origin
    })
  )
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
