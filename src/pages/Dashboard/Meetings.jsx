import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

const Meetings = () => {
  return (
    <Wrap>
      <WrapItem>
        <Center pt={6} w={'100%'}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '80%', md: '450px' }}
            height={{ sm: '450px', md: '18rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'5xl'}
            shadow={'lg'}
            padding={4}
          >
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Meet With Sharanya
              </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                Date : 12/12/2021
              </Text>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Time: 12:00 PM
              </Text>

              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}
                  gap={2}
                >
                  <Icon as={AiOutlineReload} h={5} w={5} /> Reschedule
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'red.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'red.500',
                  }}
                  _focus={{
                    bg: 'red.500',
                  }}
                  gap={2}
                >
                  <Icon as={MdDelete} h={5} w={5} /> Delete
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </WrapItem>
      <WrapItem>
        <Center pt={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '80%', md: '450px' }}
            height={{ sm: '450px', md: '18rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'5xl'}
            shadow={'lg'}
            padding={4}
          >
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Meet With Sharanya
              </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                Date : 12/12/2021
              </Text>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Time: 12:00 PM
              </Text>

              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}
                  gap={2}
                >
                  <Icon as={AiOutlineReload} h={5} w={5} /> Reschedule
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'red.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'red.500',
                  }}
                  _focus={{
                    bg: 'red.500',
                  }}
                  gap={2}
                >
                  <Icon as={MdDelete} h={5} w={5} /> Delete
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </WrapItem>
      <WrapItem>
        <Center pt={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '80%', md: '450px' }}
            height={{ sm: '450px', md: '18rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'5xl'}
            shadow={'lg'}
            padding={4}
          >
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Meet With Sharanya
              </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                Date : 12/12/2021
              </Text>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Time: 12:00 PM
              </Text>

              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}
                  gap={2}
                >
                  <Icon as={AiOutlineReload} h={5} w={5} /> Reschedule
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'red.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'red.500',
                  }}
                  _focus={{
                    bg: 'red.500',
                  }}
                  gap={2}
                >
                  <Icon as={MdDelete} h={5} w={5} /> Delete
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </WrapItem>
    </Wrap>
  )
}

export default Meetings
