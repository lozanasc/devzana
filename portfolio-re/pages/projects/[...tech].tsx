import type { NextPage, GetServerSideProps } from 'next'
import { useColorMode } from '@chakra-ui/react'
import Layout from '../../components/Layout'

const Project: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout 
      title="Projects" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
    </Layout> 
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  return {
    props: {
      
    }
  }
}

export default Project
