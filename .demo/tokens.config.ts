import { defineTheme, palette } from 'pinceau'
import nuxtThemeTokens from '@nuxt-themes/tokens/tokens'

export default defineTheme({
  color: {
    primary: nuxtThemeTokens.color?.teal || palette('teal')
  },
  typography:{
    color: {
      primary: nuxtThemeTokens.color?.teal
    }
  }
})
