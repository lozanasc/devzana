/*disable-no-inline-styles*/
import { useEffect, useState } from "react"
import { Stack, Heading, Text, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"

type HomeProps = {
  colorMode: string,
}

const Home = ({ colorMode }:HomeProps) => {
  const router = useRouter()

  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
  // Checks for current Viewport's size
    if(window.innerWidth > 767)
      setIsMobile(false)
    else if(window.innerWidth < 767)
      setIsMobile(true)
  }, [isMobile])

  return (
      <Stack spacing={[2 ,4, 4.5]} my="auto" overflowY="auto">
        <Heading 
          as="h3" 
          color={colorMode === 'light' ?  'gray.500' : 'white'}
          fontSize={['lg', 'xl', '4xl']}
        >
          Hello <span style={{fontWeight: "normal"}}>there</span><span style={{color: "#F093AF"}}>!</span>
        </Heading>
        <Heading 
          as="h1" 
          fontSize={['4xl', '3xl', '7xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
        >
          <span style={{fontWeight: 'normal'}}>I&apos;m</span> {`Sean${!isMobile ? ' Christian Lozana' : ''}`}<span style={{color: "#F093AF"}}>.</span>
        </Heading> 
        <Heading 
          as="h2" 
          fontSize={['xl', '2xl', '4xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
        >
          Aspiring <span style={{color: "#F093AF", fontWeight: "normal"}}>Software Engineer</span>
        </Heading>
        <Text 
          as="h4" 
          fontSize={['xs', 'lg', '2xl']} fontWeight="light"
          w="85%"  
          color={colorMode === 'light' ?  'gray.700' : 'white'}
        >
          I&apos;m a senior <span style={{color: "#F093AF", fontWeight: "bold"}}>Computer Science</span> student,
          currently exploring the field of Web & Mobile design to development 
          and is looking for internship opportunities to <span style={{fontWeight: "bold"}}>learn and grow</span>.
        </Text>
        <Button 
          variant="outline" 
          colorScheme={colorMode === 'light' ? 'gray.700' : 'base'} 
          size="lg" 
          maxW="fit-content" 
          _hover={
            {
              dropShadow: (colorMode === 'light' ? 'lg' : 'base')
            }
          }
        >
          <Text
            color={colorMode === 'light' ?  'gray.700' : 'white'}
            onClick={() => {router.push('/contact')}}
          >
            Say Hello 👋
          </Text>
        </Button>
      </Stack>
  )
}

export default Home;