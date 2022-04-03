import { Stack, Heading, Divider, Text, ScaleFade } from '@chakra-ui/react'

import { TechIcon, TechContainer } from './components'
import { useHooks } from './hooks'

type TechTypes = {
  colorMode: string,
}

const Tech = ({ colorMode }:TechTypes) => {

  const { TechList, addToCollection, removeFromCollection, techCollection } = useHooks()

  return (
    <Stack margin="auto">
      <TechContainer
        isOpen={techCollection.length > 0}
      >
        <Stack
          p={2}
          color='white'
          mx='10%' my={0}
          bgColor="#718096"
          rounded="xl"
          direction="row"
          justify="space-between"
        >
          <Stack direction="row" overflowX="auto" maxWidth="80%">
            { 
              techCollection.map((tools, key) => 
              <ScaleFade 
                initialScale={0.9} 
                key={key}
                in={techCollection.length > 0}
                unmountOnExit
              >
                <TechIcon
                  label={tools.name} 
                  color={colorMode === 'light' ? '#E2E8F0' : '#2D3748'} 
                  bgColor={colorMode === 'light' ? '#2D3748' : '#E2E8F0'}
                  handlePress={() => removeFromCollection(tools.id)}
                />
              </ScaleFade>)
            }
          </Stack>
          <TechIcon
            label="SeeProject"
            colorMode={colorMode}
            color={colorMode === 'light' ? '#E2E8F0' : '#2D3748'} 
            bgColor={colorMode === 'light' ? '#2D3748' : '#E2E8F0'}
            // TODO: Route to projects page with technology inside the collection as slugs
            handlePress={() => alert('Routing to Projects page...')}
          />
        </Stack>
      </TechContainer>
        <Heading
          as="h2" 
          fontSize={['md', 'xl', '2xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
          fontWeight="bold" 
          textAlign="center"
        >
          <span style={{color: "#F093AF"}}>Technologies</span> I&apos;ve enjoyed thus far
        </Heading>
        <Text 
          as="h4" 
          fontSize={['xs', 'smaller', 'sm', 'md']}
          fontWeight="light"
          color={colorMode === 'light' ?  'gray.700' : 'white'}
          alignSelf="center" textAlign="center"
        >
          A list of technologies I&apos;ve used and currently learning to create meaningful and fun projects!
        </Text>
        <Divider
          dropShadow={"md"}
          borderColor={colorMode === 'light' ?  'gray.700' : 'white'}
          width={['full', 'full', '90%']} py={1} 
          alignSelf="center"
        />
        <Stack direction="row" wrap="wrap" justify="center">
          { 
            TechList.map((tools, key) => 
              <TechIcon
                key={key}
                label={tools.name} 
                color={colorMode === 'light' ? '#E2E8F0' : '#2D3748'} 
                bgColor={colorMode === 'light' ? '#718096' : '#E2E8F0'}
                handlePress={() => addToCollection({ id: key, name: tools.name })}
              />)
          }
        </Stack>
        {
          techCollection.length <= 0 && (
          <Text 
            as="h4" 
            fontSize={['xx-small', 'xs', 'sm', 'md']}
            fontStyle="italic" fontWeight="regular"
            color={colorMode === 'light' ?  'gray.700' : 'white'}
            alignSelf="center" textAlign="center"
          >
            Click or Tap on a Technology and see projects with it! 😉
          </Text>
          )
        }
    </Stack>
  )
}

export default Tech
