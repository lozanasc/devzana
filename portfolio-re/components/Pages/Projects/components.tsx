import { useState } from "react";
import { Stack, Image, Text, Heading, useBreakpointValue } from "@chakra-ui/react";

type ProjectCardTypes = {
  title?: string,
  description?: string,
  thumbnail?: string,
  colorMode: string,
}

export const ProjectCard = ({ title, description, thumbnail, colorMode }: ProjectCardTypes) => {

  const thumbnailSize = useBreakpointValue({ base: 95, md: 150})
  const [hover, setHover] = useState(false)

  return (
    <div
      onClick={() => alert('Trigger modal')}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={{
        backgroundColor: (colorMode === 'light' ? '#2D3748' : '#718096'),
        display: 'flex', flexDirection: 'row',
        borderRadius: 4,
        filter: (hover ? 'drop-shadow(0 0 0.15rem black)' : 'none'),
        cursor: 'pointer'
      }}
    >
      <Image
        bgColor={colorMode === 'light' ? '#718096' : '#E2E8F0'}
        src={thumbnail}
        borderTopLeftRadius={4} borderBottomLeftRadius={4}
        fallbackSrc={`https://via.placeholder.com/${thumbnailSize}/${colorMode === 'light' ? '718096' : 'E2E8F0'}/2D3748`}
        height={thumbnailSize} 
        width={thumbnailSize}          
        alt="Project thumbnail 😉"/>
      <Stack padding={2} ml={[1,2,3,3]} mt={[1,2,3,3]} spacing={0}>
        <Heading
          as="h1"
          fontSize={['xs', 'small', 'xl', '2xl']}
          color={colorMode === 'light' ?  'gray.50' : 'white'}
          fontWeight="bold" 
          textAlign="left"
        >
          {title}
        </Heading>
        <Text 
          fontSize={['xx-small', 'xx-small', 'sm', 'md']}
          fontStyle="italic" fontWeight="regular"
          color={colorMode === 'light' ?  'gray.50' : 'white'}
          textAlign="left"
          noOfLines={[2, 2, 3]}
        >
          {description}
        </Text>
      </Stack>
    </div>
  )
}