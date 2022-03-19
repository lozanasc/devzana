import cache from "memory-cache"

const cachedFetch = async(url: string) => {
  try {
    const cachedResponse = cache.get(url)

    if(cachedResponse)
      return cachedResponse
    else {
      const hrs = 24
      const response = await fetch(url)
      const data = await response.json()
      cache.put(url, data, hrs * 1000 * 60 * 60)
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

export default cachedFetch