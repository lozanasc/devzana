import { useState, useMemo } from "react"

export const useHooks = () => {

  type TechCollectionTypes = {
    id: number,
    name: string,
  }
  
  const [ techCollection, setTechCollection ] = useState<TechCollectionTypes[]>([])

  // Pushes new tech to collection
  const addToCollection = (payload: TechCollectionTypes) => {
    setTechCollection([...techCollection, payload])
  }

  // Removes tech from collection
  const removeFromCollection = (id: number) => {
    setTechCollection(techCollection.filter(tech => tech.id !== id))
  }

  // Just a list of technologies I've used throughout my entire career
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