import React from 'react'
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { Link as RouterLink } from 'react-router-dom'

import Logo from '../../assets/brand/logo.png'
import AuthPageBlob from '../../assets/images/authpageblob.svg'

const Register = () => {
  return (
    <Container size={'sm'} h={'100vh'}>
      <Box m={8}>
        <Center my={4}>
          <VStack spacing={8}>
            <Link as={RouterLink} to={'/'} _hover={{ textDecor: 'none' }}>
              <HStack>
                <Image src={Logo} alt={'fastschedular logo'} />
                <Heading color={'brand.50'}>FastSchedular</Heading>
              </HStack>
            </Link>
            <Heading size={'md'}>Welcome back!</Heading>
          </VStack>
        </Center>
        <Box boxShadow={'lg'} p={[8, 12]} bg={'white'} rounded={'md'}>
          <VStack spacing={4}>
            <form>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input type={'email'} bg={'#E5ECFE'} />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type={'password'} bg={'#E5ECFE'} />
                </FormControl>
                <Button
                  bg={'brand.50'}
                  color={'white'}
                  _hover={{ opacity: 0.8 }}
                >
                  Login
                </Button>
              </VStack>
            </form>
            <Heading size={'md'}>OR</Heading>
            <Button
              leftIcon={<FcGoogle />}
              w={['full', '80%']}
              bg={'white'}
              border={'2px solid gray'}
              _hover={{ opacity: 0.8 }}
            >
              Sign in with Google
            </Button>
            <Text>
              Don't have an account?{' '}
              <Link as={RouterLink} to={'/register'} color={'brand.50'}>
                Sign up
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
      <Image
        src={AuthPageBlob}
        alt={'blob'}
        w={800}
        h={800}
        pos={'absolute'}
        top={5}
        left={250}
        zIndex={-1}
      />
    </Container>
  )
}

export default Register
