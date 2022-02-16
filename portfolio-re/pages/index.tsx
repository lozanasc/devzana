import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, VStack, Button, Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>devzana</title>
        <meta name="description" content="Made by Sean Christian Lozana with NextJS + Chakra UI 💖" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack h="100vh" w="100vw">
        <Container m="auto">
          <Heading mb={4}>
            Welcome to my new redesigned portfolio 💪🔥
          </Heading>
          <Button onClick={() => alert('🎊🎊🎊')}>
            Click for a surprise!
          </Button>
        </Container>
      </VStack>
    </div>
  )
}

export default Home
