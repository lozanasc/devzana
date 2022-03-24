import { useState, useEffect } from 'react'
import { Stack, Heading, Divider, Text, Box } from '@chakra-ui/react'

import { TechIcon } from './components'
import { useHooks } from './hooks'

type TechTypes = {
  colorMode: string,
}

const Tech = ({ colorMode }:TechTypes) => {

  const { TechList } = useHooks()

  return (
    <Stack margin="auto">
      <Heading 
          as="h2" 
          fontSize={['md', 'xl', '4xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
          fontWeight="bold"
          textAlign="center"
        >
          <span style={{color: "#F093AF"}}>Technologies</span> I&apos;ve enjoyed thus far
        </Heading>
        <Text 
          as="h4" 
          fontSize={['smaller', 'md', 'lg', 'xl']}
          fontWeight="light"
          color={colorMode === 'light' ?  'gray.700' : 'white'}
          alignSelf="center" textAlign="center"
        >
          A list of technologies I&apos;ve used and currently learning to create meaningful and fun projects!
        </Text>
        <Divider
          dropShadow={"md"}
          borderColor={colorMode === 'light' ?  'gray.700' : 'white'}
          width="100%" py={1} 
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
              />) 
          }
        </Stack>
    </Stack>
  )
}

export default Tech
