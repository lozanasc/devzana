import { Stack, Heading, Divider } from '@chakra-ui/react'
import { Key } from 'react'

import { ProjectCard } from './components'

type ProjectPageType = {
  colorMode: string,
  repoList: any
}

const Project = ({ colorMode, repoList }: ProjectPageType) => {

  console.log(repoList)
  
  return (
    <Stack marginTop={[0,1,4,4]} width="full" height="full">
        <Heading
          as="h2" 
          fontSize={['md', 'xl', '2xl']}
          color={colorMode === 'light' ?  'gray.500' : 'white'}
          fontWeight="bold" 
          textAlign="left"
        >
          <span style={{color: "#F093AF"}}>Projects</span> I&apos;m working on
        </Heading>
        <Divider
          dropShadow={"md"}
          borderColor={colorMode === 'light' ?  'gray.700' : 'white'}
          width="full" py={1} 
          alignSelf="center"
        />
        <Stack overflowY="auto" rounded="md">
          {
            repoList.map((projects: any, key: Key | null | undefined) => 
            <ProjectCard
              key={key}
              colorMode={colorMode}
              title={projects.name}
              description={projects.description}
            /> )
          }
        </Stack>
    </Stack>
  )
}

export default Project