import { extendTheme, theme as base } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#2C67F7',
  },
  twitter: '#1DA1F2',
  linkedin: '#0077B5',
  facebook: '#1877F2',
}

const fonts = {
  heading: `Alliance No 2, ${base.fonts?.heading}`,
  body: `Poppins, ${base.fonts?.body}`,
}

const theme = extendTheme({ colors, fonts })

export default theme
