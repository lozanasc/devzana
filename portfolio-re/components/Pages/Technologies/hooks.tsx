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
      type: "tool"
    },
    {
      name: "Xampp",
      type: "tool"
    },
    {
      name: "Linux",
      type: "tool"
    },
    {
      name: "Mysql",
      type: "fundamental"
    },
    {
      name: "Postgresql",
      type: "fundamental"
    },
    {
      name: "Typescript",
      type: "fundamental"
    },
    {
      name: "Javascript",
      type: "fundamental"
    },
    {
      name: "Nodejs",
      type: "framework"
    },
    {
      name: "Express",
      type: "framework"
    },
    {
      name: "Nextjs",
      type: "framework"
    },
    {
      name: "React",
      type: "framework"
    },
    {
      name: "Sass",
      type: "framework"
    },
    {
      name: "Chakraui",
      type: "framework"
    },
    {
      name: "Tailwindcss",
      type: "framework"
    },
    {
      name: "Styledcomponents",
      type: "framework"
    },
    {
      name: "Laravel",
      type: "framework"
    },
    {
      name: "Androidstudio",
      type: "tool"
    },
    {
      name: "Java",
      type: "fundmental"
    },
    {
      name: "Expo",
      type: "framework"
    },
    {
      name: "Github",
      type: "tool"
    },
    {
      name: "Gitlab",
      type: "tool"
    },
    {
      name: "Bitbucket",
      type: "tool"
    },
    {
      name: "Postman",
      type: "tool"
    },
    {
      name: "Figma",
      type: "tool"
    },
    {
      name: "Adobexd",
      type: "tool"
    },
    {
      name: "Visualstudiocode",
      type: "tool"
    },
    {
      name: "Netbeans",
      type: "tool"
    },
    {
      name: "Adobepremierepro",
      type: "tool"
    },
    {
      name: "Notion",
      type: "tool"
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