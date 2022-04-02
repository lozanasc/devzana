import { useState, useEffect, MouseEventHandler, ReactChild } from 'react'
import {
  Apache,
  Xampp,
  Linux,
  Mysql,
  Postgresql,
  Typescript,
  Javascript,
  Nodedotjs,
  Express,
  Nextdotjs,
  ReactJs,
  Sass,
  Chakraui,
  Tailwindcss,
  Styledcomponents,
  Laravel,
  Androidstudio,
  Java,
  Expo,
  Github,
  Gitlab,
  Bitbucket,
  Postman,
  Figma,
  Adobexd,
  Visualstudiocode,
  Apachenetbeanside,
  Adobepremierepro,
  Notion
} from '@icons-pack/react-simple-icons'
import { Slide, Stack } from '@chakra-ui/react'


type TechIconTypes = {
  label: string,
  color: string,
  bgColor: string,
  handlePress: MouseEventHandler<HTMLDivElement>,
}

export const TechIcon = ({ label, color, bgColor, handlePress }: TechIconTypes) => {
  
  const [ hover, setHover] = useState(false)

  const [ iconSize, setIconSize ] = useState(0)
  const [ margin, setMargin ] = useState(0)

  useEffect(() => {
    if(window.innerWidth > 767){
      setIconSize(42)
      setMargin(12)
    }
    else if(window.innerWidth < 767) {
      setIconSize(22)
      setMargin(7)
    }
  }, [])

  const Technologies: any = {
    Apache: <Apache size={iconSize} color={color}/>,
    Xampp: <Xampp size={iconSize} color={color}/>,
    Linux: <Linux  size={iconSize} color={color}/>,
    Mysql: <Mysql  size={iconSize} color={color}/>,
    Postgresql: <Postgresql size={iconSize} color={color}/>,
    Typescript: <Typescript size={iconSize} color={color}/>,
    Javascript: <Javascript size={iconSize} color={color}/>,
    Nodejs: <Nodedotjs size={iconSize} color={color}/>,
    Express: <Express size={iconSize} color={color}/>,
    Nextjs: <Nextdotjs size={iconSize} color={color}/>,
    React: <ReactJs size={iconSize} color={color}/>,
    Sass: <Sass size={iconSize} color={color}/>,
    Chakraui: <Chakraui size={iconSize} color={color}/>,
    Tailwindcss: <Tailwindcss size={iconSize} color={color}/>,
    Styledcomponents: <Styledcomponents size={iconSize} color={color}/>,
    Laravel: <Laravel size={iconSize} color={color}/>,
    Androidstudio: <Androidstudio size={iconSize} color={color}/>,
    Java: <Java size={iconSize} color={color}/>,
    Expo: <Expo size={iconSize} color={color}/>,
    Github: <Github size={iconSize} color={color}/>,
    Gitlab: <Gitlab size={iconSize} color={color}/>,
    Bitbucket: <Bitbucket size={iconSize} color={color}/>,
    Postman: <Postman size={iconSize} color={color}/>,
    Figma: <Figma size={iconSize} color={color}/>,
    Adobexd: <Adobexd size={iconSize} color={color}/>,
    Visualstudiocode: <Visualstudiocode size={iconSize} color={color}/>,
    Netbeans: <Apachenetbeanside size={iconSize} color={color}/>,
    Adobepremierepro: <Adobepremierepro size={iconSize} color={color}/>,
    Notion: <Notion size={iconSize} color={color}/>
  }

  return (
    <div 
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      onClick={handlePress}
      style={{ 
          marginTop: margin, marginBottom: margin,
          marginRight: margin, marginLeft: margin, 
          backgroundColor: bgColor, 
          padding: 9, 
          borderRadius: 8,
          cursor: 'pointer',
          filter: (hover ? 'drop-shadow(1px 2px 0.15rem rgba(0, 0, 0, 0.28))' : ''),
        }}>
      {Technologies[label]}
    </div>
  )
}

type TechContainer = {
  children: JSX.Element | JSX.Element[],
  isOpen: boolean,
}

export const TechContainer = ({ children, isOpen }: TechContainer) => {
  return (
    <Slide
      direction={'bottom'}
      in={isOpen}
      style={{ zIndex: 10 }}
    >
      { children }
    </Slide>
  )
}