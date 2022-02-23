import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { Button, VStack, Heading, useColorMode } from '@chakra-ui/react';
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  return (
    <Layout 
      title="Not found" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
      <VStack m="auto" spacing={4}>
        <Heading>
          Page not found 😢
        </Heading>
        <Button 
          colorScheme="gray"
          onClick={() => router.push('/')}  
          boxShadow="md"
        >
          Go to Homepage
        </Button>
      </VStack>
    </Layout>
  )
}

export default Home
