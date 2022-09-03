import React from 'react'
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
  return (
    <Container size={'sm'}>
      <Center m={8}>
        <VStack spacing={8}>
          <Heading color={'brand.50'}>FastSchedule</Heading>
          <Heading size={'md'}>Sign Up for Fast Schedule</Heading>
        </VStack>
      </Center>
      <Box boxShadow={'lg'} p={12} rounded={'md'}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type={'email'} bg={'#E5ECFE'} />
          </FormControl>
          <Button bg={'brand.50'} color={'white'} _hover={{ opacity: 0.8 }}>
            Get Started
          </Button>
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
    </Container>
  )
}

export default Register
