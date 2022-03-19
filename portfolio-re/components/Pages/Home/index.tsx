import { Stack, Heading, Text, Button, Divider, useBreakpointValue } from "@chakra-ui/react"
import { useRouter } from "next/router"

type HomeProps = {
  colorMode: string,
}

const Home = ({ colorMode }:HomeProps) => {

  const router = useRouter()

  const buttonSize = useBreakpointValue(['sm', 'md', 'md']);
  const namePerBreakpoint = useBreakpointValue(['Sean', 'Sean', 'Sean Christian Lozana'])

  return (
      <Stack spacing={[2 , 2, 3]} my="auto" overflowY="auto">
        <Heading 
          as="h3" 
          color={colorMode === 'light' ?  'gray.500' : 'white'}
          fontSize={['xl', '3xl', '4xl']}
        >
          Hello <span style={{fontWeight: "normal"}}>there</span>
          <span style={{marginLeft: 3,color: "#F093AF", transform: "rotate(15deg)", position: "absolute"}}>!</span>
        </Heading>
        <Heading 
          as="h1"
          fontSize={['3xl', '5xl', '5xl', '6xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
        >
          <span style={{fontWeight: 'normal'}}>I&apos;m</span> {namePerBreakpoint}<span style={{color: "#F093AF"}}>.</span>
        </Heading>
        <Divider
          dropShadow={"md"}
          borderColor={colorMode === 'light' ?  'gray.700' : 'white'}
          width={['65%', '50%', '70%']}
        /> 
        <Heading 
          as="h2" 
          fontSize={['xl', '3xl', '4xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
        >
          Software <span style={{color: "#F093AF", fontWeight: "normal"}}>Developer</span>
        </Heading>
        <Text 
          as="h4" 
          fontSize={['sm', 'xl', 'xl']} fontWeight="light"
          w={['90%', '85%', '75%']}
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
          my={[4, 3, 2]}
          padding={[2, 3, 5]}
        >
          <Text
            color={colorMode === 'light' ?  'gray.700' : 'white'}
            onClick={() => {router.push('/contact')}}
            fontSize={['xs', 'lg', 'xl']}
          >
            Say Hello 👋
          </Text>
        </Button>
      </Stack>
  )
}

export default Home;