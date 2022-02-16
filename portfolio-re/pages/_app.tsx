import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme, components } from '../styles/custom'

const custom = extendTheme({ theme, components })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={custom}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
