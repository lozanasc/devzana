import type { NextPage, GetServerSideProps } from 'next'
import { Octokit } from '@octokit/core'
import { useColorMode } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Technologies from '../components/Pages/Technologies'

const Tech: NextPage = ({ RepoList }: any) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout 
      title="Technologies" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
      <Technologies colorMode={colorMode} data={RepoList}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {

    const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY })

    const getRepoList = await octokit.request("GET /users/{username}/repos", {
      username: 'lozanasc',
    })

    const getRateLimit = await octokit.request("GET /rate_limit")

    const { data: RepoList } = getRepoList


    // resolved data from github api passed as prop
    return {
      props: {
        RepoList
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {

      }
    }
  }
}

export default Tech
