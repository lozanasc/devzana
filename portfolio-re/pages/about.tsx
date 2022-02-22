import type { NextPage } from 'next'
import { Heading, useColorMode } from '@chakra-ui/react';
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout 
      title="About" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
      <Heading>
        About Page 💪
      </Heading>
    </Layout>
  )
}

export default Home
