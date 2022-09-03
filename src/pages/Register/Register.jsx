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

import Logo from '../../assets/brand/logo.png'

const Register = () => {
  return (
    <Container size={'sm'}>
      <Box m={8}>
        <Center>
          <VStack spacing={8}>
            <HStack>
              <Image src={Logo} alt={'fastschedular logo'} />
              <Heading color={'brand.50'}>FastSchedular</Heading>
            </HStack>
            <Heading size={'md'}>Sign Up for Fast Schedule</Heading>
          </VStack>
        </Center>
        <Box boxShadow={'lg'} p={[8, 12]} rounded={'md'}>
          <VStack spacing={4}>
            <form>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input type={'email'} bg={'#E5ECFE'} />
                </FormControl>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input type={'text'} bg={'#E5ECFE'} />
                </FormControl>
                <FormControl>
                  <FormLabel>Create a strong password</FormLabel>
                  <Input type={'password'} bg={'#E5ECFE'} />
                </FormControl>
                <Button
                  bg={'brand.50'}
                  color={'white'}
                  _hover={{ opacity: 0.8 }}
                >
                  Get Started
                </Button>
              </VStack>
            </form>
            <Heading size={'md'}>OR</Heading>
            <Button
              leftIcon={<FcGoogle />}
              w={'full'}
              bg={'white'}
              border={'2px solid gray'}
              _hover={{ opacity: 0.8 }}
            >
              Sign up with Google
            </Button>
            <Text>
              Already have an account?{' '}
              <Link href={'/login'} color={'brand.50'}>
                Login
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    </Container>
  )
}

export default Register
