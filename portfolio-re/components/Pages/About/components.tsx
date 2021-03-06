import Image from 'next/image';
import { Stack } from '@chakra-ui/react';

// Profile Component
// ? Automatically switches profile asset for mobile and desktop

export const ProfileDesktop = () => {
  return (
    <Stack
      m="auto"
      display={['none', 'none', 'inline-block']}
      sx={{ filter: 'drop-shadow(2px 2px 0.10rem gray)' }}
    >
      <Image 
        src="/profile/desktop.png" 
        height={367}
        width={367} 
        alt="Photo of me Sean! 👋🙂"
      />
    </Stack>
  )
}

export const ProfileMobile = () => {
  return (
    <Stack
      m="auto"
      display={['inline-block', 'inline-block', 'none']}
      sx={{ filter: 'drop-shadow(2px 2px 0.10rem gray)' }}
    >
      <Image
        src="/profile/mobile.png" 
        height={135} 
        width={135} 
        alt="Photo of me Sean! 👋🙂"
      />
    </Stack>
  )
}