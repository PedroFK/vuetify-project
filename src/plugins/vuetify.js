/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#CF1E4E',
          secondary: '#10004F',
        },
      },
      dark: {
        colors: {
          primary: '#f70f4f',
          secondary: '#10004F',
        },
      }
    }
  }
})
