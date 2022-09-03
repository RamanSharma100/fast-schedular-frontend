import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  useMediaQuery,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import Logo from '../assets/brand/logo.png'

const Navbar = () => {
  const [isLessThan768] = useMediaQuery('(max-width: 768px)')

  return (
    <Box display={'flex'} justifyContent={'space-between'} p={4} px={12}>
      <Link as={RouterLink} to={'/'} _hover={{ textDecor: 'none' }}>
        <HStack>
          <Image src={Logo} alt={'fastschedular logo'} />
          {!isLessThan768 && (
            <Heading size={'lg'} color={'brand.50'}>
              FastSchedular
            </Heading>
          )}
        </HStack>
      </Link>
      <Spacer />
      <HStack>
        <Link as={RouterLink} to={'/login'} _hover={{ textDecor: 'none' }}>
          <Box
            px={4}
            py={2}
            rounded={'md'}
            bg={'transparent'}
            _hover={{ opacity: 0.8 }}
          >
            Login
          </Box>
        </Link>
        <Link as={RouterLink} to={'/register'} _hover={{ textDecor: 'none' }}>
          <Box
            px={4}
            py={2}
            rounded={'md'}
            bg={'brand.50'}
            color={'white'}
            _hover={{ opacity: 0.8 }}
          >
            Get Started
          </Box>
        </Link>
        <Link as={RouterLink} to={'/dashboard/'} _hover={{ textDecor: 'none' }}>
          Home
        </Link>
        <Link
          as={RouterLink}
          to={'/dashboard/availability'}
          _hover={{ textDecor: 'none' }}
        >
          Availability
        </Link>
      </HStack>
    </Box>
  )
}

export default Navbar
