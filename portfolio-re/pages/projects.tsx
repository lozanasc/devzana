import type { NextPage, GetServerSideProps } from 'next'
import { useColorMode } from '@chakra-ui/react'
import Layout from '../components/Layout'
import ProjectPage from '../components/Pages/Projects'

const Project: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout 
      title="Projects" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
      <ProjectPage colorMode={colorMode} />
    </Layout>
  )
}

export default Project
