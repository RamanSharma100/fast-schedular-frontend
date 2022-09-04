import React from 'react'
import { Box, Center, Heading, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const CTA = () => {
  return (
    <Box m={8} my={20}>
      <Heading fontWeight={'black'} textAlign={'center'}>
        Schedule a meeting now!
      </Heading>
      <Text textAlign={'center'} my={4} opacity={0.8}>
        FastSchedular is a free, open-source, and easy-to-use scheduling tool.
      </Text>
      <Center my={20}>
        <Link as={RouterLink} to={'/register'} _hover={{ textDecor: 'none' }}>
          <Box
            px={8}
            py={4}
            w={'fit-content'}
            rounded={'md'}
            bg={'brand.50'}
            color={'white'}
            _hover={{ opacity: 0.8 }}
          >
            Get Started
          </Box>
        </Link>
      </Center>
    </Box>
  )
}

export default CTA
