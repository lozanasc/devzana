import { Stack, Heading, Text, Divider, useBreakpointValue } from "@chakra-ui/react";
import { Chakraui, Nextdotjs } from '@icons-pack/react-simple-icons';
import { ProfileDesktop, ProfileMobile } from './components';

type AboutProps = {
  colorMode: string
}

const About = ({colorMode}:AboutProps) => {

  const iconSize = useBreakpointValue([24, 32, 32])

  return (
    <Stack
      w="100%"
      m="auto"
      direction={['column-reverse', 'column', 'row']}
      justify="space-evenly">
      <Stack
        m="auto"
        direction="column"
        w={['100%', '100%', '50%']}
        spacing={4}>
        <Heading
          fontSize={['lg', 'xl', 'lg', '3xl']}
          color={colorMode === 'light' ?  'gray.700' : 'white'}
          alignSelf={["center", null, "flex-start"]}
        >
          <span style={{fontWeight: 'normal'}}>I&apos;m </span>
          Sean Christian Lozana<span style={{color: "#F093AF"}}>.</span>
        </Heading>
        <Divider
          dropShadow={"md"}
          borderColor={colorMode === 'light' ?  'gray.700' : 'white'}
          width={['80%', '85%', '75%']}
          alignSelf={["center", null, "flex-start"]}
        />
        <Text 
          as="h4" 
          fontSize={['lg', 'xl', 'lg', '2xl']}
          fontWeight="light"
          w={['90%', '85%', '80%']}
          color={colorMode === 'light' ?  'gray.700' : 'white'}
          alignSelf={["center", null, "flex-start"]} textAlign={["center", null, "left"]}
        >
          I&apos;m a senior <span style={{color: "#F093AF", fontWeight: "bold"}}>Computer Science</span> student,
          currently exploring the field of Web & Mobile development 
          and is looking for internship opportunities to <span style={{fontWeight: "bold"}}>learn and grow</span>
          <span style={{color: "#F093AF"}}>.</span>
        </Text>
        <Divider
          dropShadow={"md"}
          borderColor={colorMode === 'light' ?  'gray.700' : 'white'}
          width={['80%', '85%', '75%']}
          alignSelf={["center", null, "flex-start"]}
        />
        <Stack direction="row" alignSelf={["center", null, "flex-start"]}>
          <Text 
            as="h4"
            fontSize={['lg', 'xl', 'lg', '2xl']}
            fontWeight="light"
            color={colorMode === 'light' ?  'gray.700' : 'white'}
          >
            made with 
          </Text>
          <Chakraui color={colorMode === 'light' ? '#718096' : '#E2E8F0'} height={iconSize} width={iconSize}/>
          <Text 
            as="h4"
            fontSize={['lg', 'xl', 'lg', '2xl']}
            fontWeight="bold"
            color={colorMode === 'light' ?  'gray.500' : 'white'}
          >
            +
          </Text>
          <Nextdotjs color={colorMode === 'light' ? '#718096' : '#E2E8F0'} height={iconSize} width={iconSize}/> 
          <Text 
            as="h4"
            fontSize={['lg', 'xl', 'lg', '2xl']}
            fontWeight="light"
            color={colorMode === 'light' ?  'gray.700' : 'white'}
          >
            with 💖
          </Text>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justify="center"
        w={['100%', '100%', '50%']}
      >
        <ProfileDesktop />
        <ProfileMobile />
      </Stack>
    </Stack>
  );
}

export default About;