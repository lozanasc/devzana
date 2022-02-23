import type { NextPage } from 'next'
import { useColorMode } from '@chakra-ui/react';
import Layout from '../components/Layout'
import About from '../components/Pages/About';

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout 
      title="About" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
      <About 
        colorMode={colorMode}
      />
    </Layout>
  )
}

export default Home
