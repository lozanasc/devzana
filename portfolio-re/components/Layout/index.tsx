import { ReactNode } from 'react';
import Head from 'next/head'
import { VStack, Container,  useColorMode } from '@chakra-ui/react';
import { Navigation, Footer } from './components';

type Props = {
  children?: ReactNode,
  title?: string,
}

const Layout = ({ children, title  }:Props) => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack 
      w="100vw" h="100vh" 
      bgColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      justify="space-evenly"
    >
      <Head>
        <title>{`devzana | ${title}`}</title>
        <meta name="description" content="Made by Sean Christian Lozana with NextJS + Chakra UI 💖" />
        {/* <link rel="icon" href="/" /> */}
      </Head>
      <Navigation 
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
      <Container 
        minH="75%" maxH="75%"
         minW="75%" maxW="75%"
         p={4}
      >
        {children}
      </Container>
      <Footer colorMode={colorMode} />
    </VStack>
  )
}

export default Layout