import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const RHTheme = {
  dark: true,
  colors: {
    background: '#001f3f',
    surface: '#606880',
    primary: '#8aea92',
    secondary: '#fca311',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'RHTheme',
    themes: {
      RHTheme
    }
  }
})
