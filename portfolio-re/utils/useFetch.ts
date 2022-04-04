// * Refactor: Add types maybe?

export const useFetch = () => {
  const fetcher = async(url: any) => {
    return fetch(url).then(res => res.json())
  }
  return {
    fetcher
  }
}
