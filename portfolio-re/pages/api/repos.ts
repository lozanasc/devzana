import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/core'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'

// *  Should I add response types?
type RepoType = {

}

export default async function repoHandler(req: NextApiRequest, res: NextApiResponse){

  const {
    method,
  } = req

  const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY })
  const repos = octokit

  switch (req.method) {
    case 'GET':
      const { data } = await repos.request(`${req.method} /user/repos`, { type: 'public' })
      res.status(200).json(data)
      break
  
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
  
}