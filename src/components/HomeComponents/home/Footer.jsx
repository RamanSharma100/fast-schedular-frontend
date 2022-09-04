import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Center my={10}>
      <Text>© {new Date().getFullYear()} FastSchedular</Text>
    </Center>
  )
}

export default Footer
