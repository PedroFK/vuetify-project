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
  defaults: {
    VBtn: {
      variant: ''
    },
    VTextField: {
      variant: 'outlined'
    }
  },

  theme: {
    themes: {
      light: {
        colors: {
          primary: '#CF1E4E',
          secondary: '#4A148C',
        },
      },
      dark: {
        colors: {
          primary: '#f70f4f',
          secondary: '#4A148C',
        },
      }
    }
  }
})
