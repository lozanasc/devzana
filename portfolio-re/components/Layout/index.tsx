import { ReactNode, MouseEventHandler } from 'react';
import Head from 'next/head'
import { VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MobileNavigation, TopBar, Navigation, Footer } from './components';

type Props = {
  children?: ReactNode,
  title?: string,
  colorMode: string,
  toggleColorMode: MouseEventHandler<HTMLButtonElement>,
}

const Layout = ({ children, title, colorMode, toggleColorMode }:Props) => {

  return (
      <VStack 
        w="100vw" h="100vh" 
        bgColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
        justify="space-between"
        paddingY={4}
        overflow="hidden"
      >
        <Head>
          <title>{`devzana | ${title}`}</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
          <meta name="description" content="Made by Sean Christian Lozana with (NextJS + Chakra UI) 💖" />
          <meta name="robots" content="noindex" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={ colorMode === 'light' ? '/light/logo/Light-Page.ico' : '/dark/logo/Dark-Page.ico'} />
        </Head>
        <TopBar 
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <Navigation 
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <motion.div
            // ? Transition animation each page
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition = {{duration: 1}}
            style={{
              minHeight: "75%", maxHeight: "75%",
              minWidth: "75%", maxWidth: "75%",
              display: 'flex'
            }}
        >
          {children}
        </motion.div>
        <MobileNavigation 
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <Footer colorMode={colorMode} />
      </VStack>
  )
}

export default Layout