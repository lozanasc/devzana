import { Stack, Heading, Text, Button, Divider, Container, useBreakpointValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Image from "next/image"

type HomeProps = {
  colorMode: string,
}

const Home = ({ colorMode }:HomeProps) => {

  const router = useRouter()

  const buttonSize = useBreakpointValue(['sm', 'md', 'md']);
  const name = useBreakpointValue({ base: 'Sean', md: 'Sean Christian Lozana' })
  
  return (
      <Stack my="auto" overflowY="auto" direction="row" justify="space-evenly">
        <Stack>
          <Heading 
            my={4}
            as="h3" 
            color={colorMode === 'light' ?  'gray.500' : 'white'}
            fontSize={['xl', '2xl', '3xl']}
          >
            Hello <span style={{fontWeight: "normal"}}>there</span>
            <span style={{marginLeft: 3,color: "#F093AF", transform: "rotate(15deg)", position: "absolute"}}>!</span>
          </Heading>
          <Heading 
            w="max-content"
            as="h1"
            fontSize={['3xl', '4xl', '4xl']}
            color={colorMode === 'light' ?  'gray.500' : 'white'}
          >
            <span style={{fontWeight: 'normal'}}>I&apos;m</span> {name}<span style={{ color: "#F093AF"}}>.</span>
            <Divider
              my={[1,1,2]}
              dropShadow={"md"}
              borderColor={colorMode === 'light' ?  'gray.700' : 'white'}
            /> 
          </Heading>
          <Heading 
            as="h2" 
            fontSize={['xl', '2xl', '3xl']}
            color={colorMode === 'light' ?  'gray.500' : 'white'}
          >
            Software <span style={{color: "#F093AF", fontWeight: "normal"}}>Developer</span>
          </Heading>
          <Text
            pb={[ 2, 2, 6 ]}
            as="h4" 
            fontSize={['sm', 'large', 'large']} fontWeight="light"
            w={['90%', '85%', '80%']}
            color={colorMode === 'light' ?  'gray.700' : 'white'}
          >
            I&apos;m a senior <span style={{color: "#F093AF", fontWeight: "bold"}}>Computer Science</span> student,
            currently exploring the field of Web & Mobile development and is 
            looking for opportunities to <span style={{fontWeight: "bold"}}>learn and grow</span>
            <span style={{color: "#F093AF"}}>.</span>
          </Text>
          <Button 
            variant="outline" 
            colorScheme={colorMode === 'light' ? 'gray.700' : 'base'} 
            maxW="fit-content"
            size={buttonSize}
            padding={[2, 3, 4]}
            onClick={() => router.push('/contact')}
          >
            Say Hello! 👋
          </Button>
        </Stack>
        <Container
          alignSelf="center"
          mx="auto"
          display = {['none', 'none', 'flex']}
        >
          <Image 
            src="/illustrations/illustration.svg" 
            height={367}
            width={600} 
            alt="Photo of me Sean! 👋🙂"
            loading="lazy"
          />
        </Container>
      </Stack>
  )
}

export default Home;