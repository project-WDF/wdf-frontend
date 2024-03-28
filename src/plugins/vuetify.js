import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#2fd0c0',
    'primary-lighten-1': '#59d9cc',
    'primary-lighten-2': '#82e3d9',
    'primary-lighten-3': '#acece6',
    'primary-lighten-4': '#d5f6f2',
    'primary-darken-1': '#24a899',
    'primary-darken-2': '#1b7e73',
    'primary-darken-3': '#12544c',
    'primary-darken-4': '#092a26'
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
    themes: {
      myCustomLightTheme
    }
  }
})

export default vuetify
