import type { NextPage } from 'next'
import { useColorMode } from '@chakra-ui/react';
import Layout from '../components/Layout'
import Homepage from '../components/Pages/Home';

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout 
      title="Home" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
      <Homepage colorMode={colorMode} />
    </Layout>
  )
}

export default Home
