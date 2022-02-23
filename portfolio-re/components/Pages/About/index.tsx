import { Stack, Heading, Text, Divider } from "@chakra-ui/react";
import { ProfileDesktop, ProfileMobile } from './components';

type AboutProps = {
  colorMode: string
}

const About = ({colorMode}:AboutProps) => {
  return (
    <Stack
      w="100%"
      m="auto"
      direction={['column-reverse', 'column-reverse', 'row']}
      justify="space-evenly"
    >
      <Stack
        direction="column"
        w={['100%', '100%', '50%']}
        m="auto"
        spacing={4}
      >
        <Heading
          fontSize={['lg', 'xl', '4xl']}
        >
          <span style={{fontWeight: 'normal'}}>I&apos;m </span>
          Sean Christian Lozana<span style={{color: "#F093AF"}}>.</span>
        </Heading>
        <Divider
           width={['80%', '85%', '75%']}
        />
        <Text 
          as="h4" 
          fontSize={['sm', 'xl', '2xl']} fontWeight="light"
          w={['90%', '85%', '80%']}
          color={colorMode === 'light' ?  'gray.700' : 'white'}
        >
          I&apos;m a senior <span style={{color: "#F093AF", fontWeight: "bold"}}>Computer Science</span> student,
          currently exploring the field of Web & Mobile design to development 
          and is looking for internship opportunities to <span style={{fontWeight: "bold"}}>learn and grow</span>
          <span style={{color: "#F093AF"}}>.</span>
        </Text>
        <Divider
           width={['80%', '85%', '75%']}
        />
      </Stack>
      <Stack w={['100%', '100%', '50%']}>
        <ProfileDesktop />
        <ProfileMobile />
      </Stack>
    </Stack>
  );
}

export default About;