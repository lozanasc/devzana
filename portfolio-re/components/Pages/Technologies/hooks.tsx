import { useState, useMemo } from "react"
import { useToast } from "@chakra-ui/react"

export const useHooks = () => {

  type TechCollectionTypes = {
    id: number,
    name: string,
  }

  const Toast = useToast()

  const [ techCollection, setTechCollection ] = useState<TechCollectionTypes[]>([])

  const addToCollection = (payload: TechCollectionTypes) => {
    // TODO: isDuplicate is expensive, find a better way to do this... if time permits
    const isDuplicate = techCollection.find(item => item.id === payload.id)
    if(isDuplicate)
      Toast({
        title: 'Oops!',
        description: 'Tech already added...',
        status: 'error',
        position: 'top',
        duration: 1500,
        isClosable: true,
      })
    else if(techCollection.length > 3 )
      Toast({
        title: 'Wait...',
        description: 'Limited to 4 technologies at once',
        status: 'info',
        position: 'top',
        duration: 1500,
        isClosable: true,
      })
    else
      setTechCollection([...techCollection, payload])
  }

  // Removes tech from collection
  const removeFromCollection = (id: number) => {
    setTechCollection(techCollection.filter(tech => tech.id !== id))
  }

  const TechList = useMemo(() => [
    {
      name: "Apache",
    },
    {
      name: "Xampp"
    },
    {
      name: "Linux"
    },
    {
      name: "Mysql"
    },
    {
      name: "Postgresql"
    },
    {
      name: "Typescript"
    },
    {
      name: "Javascript"
    },
    {
      name: "Nodejs"
    },
    {
      name: "Express"
    },
    {
      name: "Nextjs"
    },
    {
      name: "React"
    },
    {
      name: "Sass"
    },
    {
      name: "Chakraui"
    },
    {
      name: "Tailwindcss"
    },
    {
      name: "Styledcomponents"
    },
    {
      name: "Laravel"
    },
    {
      name: "Androidstudio"
    },
    {
      name: "Java"
    },
    {
      name: "Expo"
    },
    {
      name: "Github"
    },
    {
      name: "Gitlab"
    },
    {
      name: "Bitbucket"
    },
    {
      name: "Postman"
    },
    {
      name: "Figma"
    },
    {
      name: "Adobexd"
    },
    {
      name: "Visualstudiocode"
    },
    {
      name: "Netbeans"
    },
    {
      name: "Adobepremierepro"
    },
    {
      name: "Notion"
    }
], [])

  return {
    TechList,
    techCollection,
    setTechCollection,
    addToCollection,
    removeFromCollection
  }
}