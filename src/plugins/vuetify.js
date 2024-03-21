import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#40E0D0FF'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    variations: {
      colors: ['primary'],
      lighten: 3,
      darken: 3
    },
    themes: {
      myCustomLightTheme
    }
  }
})

export default vuetify
