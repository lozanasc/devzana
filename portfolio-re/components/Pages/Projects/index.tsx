import { Key, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Stack, Heading, Divider, Spinner } from '@chakra-ui/react'

import { ProjectCard } from './components'
import { useFetch } from '../../../utils/useFetch'

type ProjectPageType = {
  colorMode: string,
}

const Project = ({ colorMode }: ProjectPageType) => {

  const router = useRouter()

  const { fetcher } = useFetch()

  const { data, error } = useSWR('/api/repos', fetcher)

  return (
    <Stack marginTop={[0,1,2,2]} width="full" height="full">
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
        <div 
          style={{ 
            display: 'flex', flexDirection: 'column', flex: 1,
            overflowY: 'auto', overflowX: 'hidden',borderRadius: 4,
            scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none'
          }}
        >
          {
            error ? 
            <Heading
              as="h2" 
              fontSize={['md', 'xl', '2xl']}
              color={colorMode === 'light' ?  'gray.500' : 'white'}
              fontWeight="bold" 
              textAlign="left"
            >
              <span style={{color: "#F093AF"}}>Oops!</span> Something went wrong!
            </Heading>
            : data ? data?.map((projects: any, key: Key | null | undefined) => 
              <ProjectCard
                key={key}
                colorMode={colorMode}
                title={projects.name}
                description={projects.description}
              />) : 
              <Spinner
                margin="auto"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="pink.300"
                size="xl"
              />
          }
        </div>
    </Stack>
  )
}

export default Project