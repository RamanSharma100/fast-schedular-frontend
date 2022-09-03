import React from 'react'
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import Blob from '../../assets/images/blob.svg'

const Hero = () => {
  return (
    <Box h={'100vh'}>
      <Center py={40}>
        <VStack spacing={20}>
          <Heading fontSize={'4rem'} textAlign={'center'} fontWeight={'black'}>
            Schedule Meetings in a <br />{' '}
            <Box
              bgGradient={
                'linear( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% );'
              }
              bgClip={'text'}
            >
              Flash !
            </Box>
          </Heading>
          <Link as={RouterLink} to={'/register'} _hover={{ textDecor: 'none' }}>
            <Box
              px={4}
              py={2}
              rounded={'md'}
              bgGradient={
                'linear( 68.3deg,  rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% )'
              }
              color={'white'}
              _hover={{ opacity: 0.8 }}
            >
              Get Started
            </Box>
          </Link>
        </VStack>
      </Center>
      <Image
        src={Blob}
        alt={'blob'}
        w={40}
        h={40}
        pos={'absolute'}
        top={400}
        zIndex={-1}
      />
      <Image
        src={Blob}
        alt={'blob'}
        w={40}
        h={40}
        pos={'absolute'}
        top={100}
        right={10}
        zIndex={-1}
      />
      <Image
        src={Blob}
        alt={'blob'}
        w={60}
        h={60}
        pos={'absolute'}
        top={100}
        left={200}
        zIndex={-1}
      />
    </Box>
  )
}

export default Hero
