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
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import axiosClient from '../../utils/axiosClient'

import Logo from '../../assets/brand/logo.png'
import AuthPageBlob from '../../assets/images/authpageblob.svg'
import axios from 'axios'

const Register = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      toast.error('Please fill all the fields')
      return
    }

    // valid emails address
    const re = /\S+@\S+\.\S+/
    if (!re.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    // password length
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long')
      return
    }

    // password must have at least one number
    const re2 = /\d/
    if (!re2.test(password)) {
      toast.error('Password must contain at least one number')
      return
    }

    // password must have at least one uppercase letter
    const re3 = /[A-Z]/
    if (!re3.test(password)) {
      toast.error('Password must contain at least one uppercase letter')
      return
    }

    // password must have at least one lowercase letter
    const re4 = /[a-z]/
    if (!re4.test(password)) {
      toast.error('Password must contain at least one lowercase letter')
      return
    }

    // password must have at least one special character
    const re5 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    if (!re5.test(password)) {
      toast.error('Password must contain at least one special character')
      return
    }

    const data = {
      name,
      email,
      password,
    }

    axios
      .post('https://api.fastschedular.live/api/auth/register', data)
      .then((res) => {
        toast.success(res.data.msg)
        navigate('/login')
      })
      .catch((err) => {
        toast.error(err.response?.data?.msg)
      })
  }

  return (
    <Container size={'sm'}>
      <Box m={8}>
        <Center my={4}>
          <VStack spacing={8}>
            <Link as={RouterLink} to={'/'} _hover={{ textDecor: 'none' }}>
              <HStack>
                <Image src={Logo} alt={'fastschedular logo'} />
                <Heading color={'brand.50'}>FastSchedular</Heading>
              </HStack>
            </Link>
          </VStack>
        </Center>
        <Box boxShadow={'lg'} p={[8, 12]} bg={'white'} rounded={'md'}>
          <VStack spacing={4}>
            <Heading size={'md'}>Sign Up for Fast Schedule</Heading>
            <form
              style={{ width: '100%', marginTop: 25 }}
              onSubmit={handleSubmit}
            >
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type={'email'}
                    bg={'#E5ECFE'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type={'text'}
                    bg={'#E5ECFE'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Create a strong password</FormLabel>
                  <Input
                    type={'password'}
                    bg={'#E5ECFE'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button
                  bg={'brand.50'}
                  color={'white'}
                  _hover={{ opacity: 0.8 }}
                  w={'100%'}
                  type={'submit'}
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
              <Link as={RouterLink} to={'/login'} color={'brand.50'}>
                Login
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
      <Image
        src={AuthPageBlob}
        alt={'blob'}
        w={900}
        h={900}
        pos={'absolute'}
        top={5}
        left={200}
        zIndex={-1}
      />
    </Container>
  )
}

export default Register
