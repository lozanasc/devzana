import { Octokit } from '@octokit/core'
import type { NextPage, GetServerSideProps } from 'next'
import { useColorMode } from '@chakra-ui/react'
import Layout from '../components/Layout'
import ProjectPage from '../components/Pages/Projects'

const Project: NextPage = ({ RepositoryList }: any) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout 
      title="Projects" 
      colorMode={colorMode} 
      toggleColorMode={toggleColorMode}
    >
      <ProjectPage colorMode={colorMode} repoList={RepositoryList} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {

  const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });

  // TODO: Find a way to grab the Social Preview for each repository through their REST API
  const GetRepositoryList = await octokit.request('GET /user/repos', {
    type: 'public',
    sort: 'updated'
  })

  const { data: RepositoryList } = GetRepositoryList

  // TODO: Too big, need to filter shitty projects from the best one...
  return {
    props: {
      RepositoryList
    }
  }
}

export default Project
