import { MouseEventHandler } from 'react';
import { HStack, Stack, Text, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Facebook, Github, Instagram, Linkedin } from '@icons-pack/react-simple-icons';

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
  return (
    <Text 
      _hover={{fontWeight: 'bold'}}
      my="auto"
      color={ colorMode === 'light' ? 'gray.200' : 'gray.700'}
    >
      <Link href={href}>
        {text}
      </Link>
    </Text>
  )
}

/**
 * * Navigation
 * Navigation component for the Layout
 * Serves as navigator for users
 * ? This will remain even when changing paths/url
 */

type NavigationProps = {
  colorMode: string,
  toggleColorMode: MouseEventHandler<HTMLButtonElement>,
}

export const Navigation = ({ colorMode, toggleColorMode }: NavigationProps) => {
  const router = useRouter();
  return (
    <HStack 
      w="75%" 
      mx="auto"
      justify="space-between"
      px={12} py={3}
      bgColor = { colorMode === 'light' ? "gray.500" : "gray.200" }
      rounded="lg"
    >
    <Stack
      cursor="pointer"
    >
      <Image 
        src={ colorMode === 'light' ? "/light/logo/logo.svg" : "/dark/logo/logo.svg"} 
        width={88}
        height={16}
        alt="<devzana.>"
        onClick={() => {router.push('/')}}
      />
    </Stack>
    <HStack spacing={6}>
      <LinkText 
        text="about" 
        href="/about"
        colorMode={colorMode}
      />
      <LinkText 
        text="tech" 
        href="/tech"
        colorMode={colorMode}
      />
      <LinkText 
        text="projects" 
        href="/projects"
        colorMode={colorMode}
      />
      <LinkText 
        text="blog" 
        href="/blog"
        colorMode={colorMode}
      />
      <LinkText 
        text="contact" 
        href="/contact"
        colorMode={colorMode}
      />
      <IconButton
        aria-label='Toggle Light mode'
        icon={
            <Image 
              src={ colorMode === 'light' ? "/light/icons/darkToggle.svg" : "/dark/icons/lightToggle.svg"} 
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
  return (
    <HStack 
      w="75%" 
      mx="auto"
      justify="space-between"
      px={12} py={3}
      bgColor = { colorMode === 'light' ? "gray.500" : "gray.200" }
      rounded="lg"
    >
      <Stack>
        <Text
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
        aria-label='Facebook'
        icon={
          <Facebook 
            color={colorMode === 'light' ? '#E2E8F0' : '#718096'}
          />
        }
        colorScheme="gray.200"
        />
        <IconButton
        aria-label='Instagram'
        icon={
          <Instagram 
            color={colorMode === 'light' ? '#E2E8F0' : '#718096'}
          />
        }
        colorScheme="gray.200"
        />
        <IconButton
        aria-label='GitHub'
        icon={
          <Github 
            color={colorMode === 'light' ? '#E2E8F0' : '#718096'}
          />
        }
        colorScheme="gray.200"
        />
        <IconButton
        aria-label='Linkedin'
        icon={
          <Linkedin 
            color={colorMode === 'light' ? '#E2E8F0' : '#718096'}
          />
        }
        colorScheme="gray.200"
        />
      </Stack>
    </HStack>
  )
}