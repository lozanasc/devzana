/*disable-no-inline-styles*/
import { useEffect, useState } from "react"
import { Stack, Heading, Text, Button, useBreakpointValue } from "@chakra-ui/react"
import { useRouter } from "next/router"

type HomeProps = {
  colorMode: string,
}

const Home = ({ colorMode }:HomeProps) => {
  const router = useRouter()

  // Store's the current state of the Viewport
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    // Checks for current Viewport's size
    if(window.innerWidth > 767)
      setIsMobile(false)
    else if(window.innerWidth < 767)
      setIsMobile(true)
  }, [])
  
  const buttonSize = useBreakpointValue(['sm', 'md', 'md']);

  return (
      <Stack spacing={[1 , 1, 4]} my="auto" overflowY="auto">
        <Heading 
          as="h3" 
          color={colorMode === 'light' ?  'gray.500' : 'white'}
          fontSize={['xl', '3xl', '3xl']}
        >
          Hello <span style={{fontWeight: "normal"}}>there</span><span style={{color: "#F093AF"}}>!</span>
        </Heading>
        <Heading 
          as="h1" 
          fontSize={['2xl', '4xl', '5xl', '7xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
        >
          <span style={{fontWeight: 'normal'}}>I&apos;m</span> {`Sean${!isMobile ? ' Christian Lozana' : ''}`}<span style={{color: "#F093AF"}}>.</span>
        </Heading> 
        <Heading 
          as="h2" 
          fontSize={['xl', '3xl', '3xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
        >
          Aspiring <span style={{color: "#F093AF", fontWeight: "normal"}}>Software Engineer</span>
        </Heading>
        <Text 
          as="h4" 
          fontSize={['sm', 'xl', 'xl']} fontWeight="light"
          w={['90%', '85%', '75%']}
          color={colorMode === 'light' ?  'gray.700' : 'white'}
        >
          I&apos;m a senior <span style={{color: "#F093AF", fontWeight: "bold"}}>Computer Science</span> student,
          currently exploring the field of Web & Mobile development and is 
          looking for internship opportunities to <span style={{fontWeight: "bold"}}>learn and grow</span>
          <span style={{color: "#F093AF"}}>.</span>
        </Text>
        <Button 
          variant="outline" 
          colorScheme={colorMode === 'light' ? 'gray.700' : 'base'} 
          maxW="fit-content"
          size={buttonSize}
          padding={5}
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