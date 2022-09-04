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
import { loginSuccessAction } from '../../store/reducers/user'
import Logo from '../../assets/brand/logo.png'
import AuthPageBlob from '../../assets/images/authpageblob.svg'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const Register = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Please fill all the fields')
      return
    }

    axios
      .post('http://localhost:8000/api/auth/login', { email, password })
      .then((res) => {
        localStorage.setItem('fs-user', JSON.stringify(res.data))
        toast.success(res.data.msg)
        dispatch(
          loginSuccessAction({
            logged: true,
            user: res.data.user,
            authToken: res.data.token,
          })
        )
        navigate('/dashboard')
      })
      .catch((err) => {
        toast.error(err.response?.data?.msg)
      })
  }
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
          </VStack>
        </Center>
        <Box
          boxShadow={'lg'}
          mt={55}
          p={[0, 12]}
          bg={'white'}
          rounded={'md'}
          border={'1px solid rgba(0, 0, 0, 0.1)'}
        >
          <VStack spacing={4} px={5}>
            <Heading size={'md'}>Welcome back!</Heading>
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>
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
                  <FormLabel>Password</FormLabel>
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
                  width={'100%'}
                  type={'submit'}
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
