import type { NextPage, GetServerSideProps } from 'next'
import { useColorMode } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Technologies from '../components/Pages/Technologies'

const Tech: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout 
      title="Technologies" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
      <Technologies colorMode={colorMode} />
    </Layout>
  )
}

export default Tech
