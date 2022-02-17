import type { NextPage } from 'next'
import { Heading, Button } from '@chakra-ui/react'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout
      title="Home"
    >
    <Heading mx="auto">
      Welcome to my redesigned portfolio! 🔥💪
    </Heading>
    <Button 
      mt={6}
      variant="outline" 
      colorScheme="facebook"
      onClick={() => alert("Yay! 🎊🎊🎊")}
    >
      Click for a surprise! 🔥
    </Button>
    </Layout>
  )
}

export default Home
