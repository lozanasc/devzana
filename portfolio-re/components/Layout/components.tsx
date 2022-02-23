import { MouseEventHandler } from 'react';
import { HStack, Stack, Text, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Facebook, Github, Instagram, Linkedin } from '@icons-pack/react-simple-icons';


// Routes for the Navigation
// ? cleaner code in the Nav component and I'll be able to implement activeStyle
const Route: { name: string, href: string }[] =[
  {
    name: 'about',
    href: '/about'
  },
  {
    name: 'tech',
    href: '/tech'
  },
  {
    name: 'projects',
    href: '/projects'
  },
  {
    name: 'blog',
    href: '/blog'
  },
  {
    name: 'contact',
    href: '/contact'
  }
]

type LogoProps = {
  colorMode: string,
}

const Logo = ({colorMode}:LogoProps) => {
  const router = useRouter();
  const Dark = () => <Image 
    src="/dark/logo/logo.svg" 
    width={88} height={16}
    alt="<devzana.>"
    onClick={() => {router.push('/')}}
  />
  const Light = () => <Image 
    src="/light/logo/logo.svg"
    width={88} height={16}
    alt="<devzana.>"
    onClick={() => {router.push('/')}}
  />
  
  return colorMode === 'light' ? <Light /> : <Dark />;
}

/**
 * * LinkText component
 * Component was made due to it being redundant
 * Basically a Text component that nests a Link component
 * and accepts text and href as props
 */
type LinkTextProps = {
  text: string,
  href: string,
  colorMode: string,
}

const LinkText = ({text, href, colorMode}:LinkTextProps) => {
  const router = useRouter();
  return (
    <Text 
      _hover={{fontWeight: 'bold'}}
      my="auto"
      color={ colorMode === 'light' ? 'gray.200' : 'gray.700'}
      fontSize={['sm', 'sm', 'md', 'lg']}
      fontWeight={router.asPath === href ? 'black' : 'normal'}
    >
      <Link href={href}>
        {text}
      </Link>
    </Text>
  )
}

/**
 * * Navigation with Mobile
 * Navigation component for the Layout
 * Serves as navigator for users
 * ? This will remain even when changing paths/url
 */

type TopBarProps = {
  colorMode: string,
  toggleColorMode: MouseEventHandler<HTMLButtonElement>,
}

 export const TopBar = ({ colorMode, toggleColorMode }: TopBarProps) => {
  const altColorMode = (colorMode: string) => colorMode !== 'light' ? 'light' : 'dark';
  return (
    <HStack 
      w="75%"
      mx="auto"
      justify="space-between"
      px={{ sm: 0, md: 12}} py={1}
      rounded="lg"
      display = {['flex', 'flex', 'none']}
    >
      <IconButton 
        aria-label="devzana Logo"
        icon = {<Logo colorMode={altColorMode(colorMode)}/>}
        colorScheme="gray.200"
      />
      <IconButton
          aria-label="Toggle Light mode"
          icon={
              <Image 
                src={ altColorMode(colorMode) === 'light' ? '/light/icons/darkToggle.svg' : '/dark/icons/lightToggle.svg'} 
                height={32} width={32} 
                alt="clouds with the sun peaking"
              />
            }
          colorScheme="gray.200"
          onClick={toggleColorMode}
        />
    </HStack>
  )
}


type NavigationProps = {
  colorMode: string,
  toggleColorMode: MouseEventHandler<HTMLButtonElement>,
}



export const MobileNavigation = ({ colorMode }: NavigationProps) => {
  return (
    <HStack 
      w="75%" 
      mx="auto"
      justify="space-between"
      px={[4, 6, 12]} py={[3 , 5, 5]}
      rounded="xl"
      bgColor = {colorMode === 'light' ? 'gray.500' : 'gray.200'}
      display = {['flex', 'flex', 'none']}
      boxShadow="dark-lg"
    >
      <HStack spacing={[3, 8, 12]} mx="auto">
        {
          Route.map(({ name, href }, key) => 
            <LinkText
              key={key}
              text={name}
              href={href}
              colorMode={colorMode}
            />
          )
        }
      </HStack>
    </HStack>
  )
}

export const Navigation = ({ colorMode, toggleColorMode }: NavigationProps) => {
  return (
    <HStack 
      w="75%" 
      mx="auto"
      justify="space-between"
      px={12} py={3}
      rounded="lg"
      bgColor = {{ sm: colorMode === 'light' ? 'gray.200' : 'gray.700', md: colorMode === 'light' ? 'gray.500' : 'gray.200'}}
      display = {['none', 'none', 'flex']}
      boxShadow="md"
    >
      <IconButton 
        aria-label="devzana Logo"
        icon = {<Logo colorMode={colorMode}/>}
        colorScheme="gray.200"
      /> 
      <HStack spacing={6}>
       {
         Route.map(({ name, href }, key) => 
         <LinkText
           key={key}
           text={name}
           href={href}
           colorMode={colorMode}
         />
       )
       }
        <IconButton
          aria-label="Toggle Light mode"
          icon={
              <Image 
                src={ colorMode === 'light' ? '/light/icons/darkToggle.svg' : '/dark/icons/lightToggle.svg'} 
                height={32} width={32} 
                alt="clouds with the sun peaking"
              />
            }
          colorScheme="gray.200"
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  )
}

/**
 * * Footer
 * Footer component for the Layout
 * Adds additional information of both the website and the owner
 * ? This will remain even when changing paths/url
 */

type FooterProps = {
  colorMode: string,
}

export const Footer = ({ colorMode }:FooterProps) => {
  const router = useRouter();
  const Socials = {
    Facebook: 'https://www.facebook.com/devzana',
    Instagram: 'https://www.instagram.com/lozanasc/',
    Github: 'https://github.com/lozanasc',
    Linkedin: 'https://www.linkedin.com/in/devzana/'
  }
  return (
    <HStack 
      w="75%" 
      mx="auto"
      justify="space-between"
      px={12} py={3}
      bgColor = { colorMode === 'light' ? "gray.500" : "gray.200" }
      rounded="lg"
      display = {['none', 'none', 'flex']}
      boxShadow="md"
    >
      <Stack>
        <Text
          fontSize="small"
          fontWeight="bold"
          color={ colorMode === 'light' ? 'gray.200' : 'gray.700'}
        >
          © 2022 Sean Christian Lozana. All rights reserved.
        </Text>
      </Stack>
      <Stack
        direction="row"
      >
       <IconButton
        aria-label="Facebook"
        icon={
          <Facebook 
            color={colorMode === 'light' ? '#E2E8F0' : '#718096'}
          />
        }
        colorScheme="gray.200"
        _hover = {{ dropShadow: 'md' }}
        onClick={() => {router.push(Socials.Facebook)}}
        />
        <IconButton
        aria-label="Instagram"
        icon={
          <Instagram 
            color={colorMode === 'light' ? '#E2E8F0' : '#718096'}
          />
        }
        colorScheme="gray.200"
        _hover = {{ dropShadow: 'md' }}
        onClick={() => {router.push(Socials.Instagram)}}
        />
        <IconButton
        aria-label="GitHub"
        icon={
          <Github 
            color={colorMode === 'light' ? '#E2E8F0' : '#718096'}
          />
        }
        colorScheme="gray.200"
        _hover = {{ dropShadow: 'md' }}
        onClick={() => {router.push(Socials.Github)}}
        />
        <IconButton
        aria-label="Linkedin"
        icon={
          <Linkedin 
            color={colorMode === 'light' ? '#E2E8F0' : '#718096'}
          />
        }
        colorScheme="gray.200"
        _hover = {{ dropShadow: 'md' }}
        onClick={() => {router.push(Socials.Linkedin)}}
        />
      </Stack>
    </HStack>
  )
}