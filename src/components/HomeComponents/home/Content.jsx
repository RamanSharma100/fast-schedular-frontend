import React from 'react'
import { Box, Center, Circle, Heading, HStack, VStack } from '@chakra-ui/react'

const Content = () => {
  return (
    <Box bg={'#E5ECFE'} p={10}>
      <Box m={8} my={20}>
        <Center>
          <Heading fontWeight={'black'}>
            A Simple Alternative to Calendly
          </Heading>
        </Center>
        <Center>
          <HStack my={20} spacing={8}>
            <Box bg={'white'} p={4} px={8} rounded={'lg'} boxShadow={'md'}>
              <Center>
                <Circle size={'40px'} bg={'brand.50'}>
                  <Heading size={'md'} color={'white'}>
                    1
                  </Heading>
                </Circle>
              </Center>
              <Heading
                size={'md'}
                mt={4}
                bgGradient={
                  'radial( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )'
                }
                bgClip={'text'}
              >
                Set your availability
              </Heading>
            </Box>
            <Box bg={'white'} p={4} px={14} rounded={'lg'} boxShadow={'md'}>
              <Center>
                <Circle size={'40px'} bg={'brand.50'}>
                  <Heading size={'md'} color={'white'}>
                    2
                  </Heading>
                </Circle>
              </Center>
              <Heading
                size={'md'}
                mt={4}
                bgGradient={
                  'radial( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )'
                }
                bgClip={'text'}
              >
                Create an event
              </Heading>
            </Box>
            <Box bg={'white'} p={4} px={16} rounded={'lg'} boxShadow={'md'}>
              <Center>
                <Circle size={'40px'} bg={'brand.50'}>
                  <Heading size={'md'} color={'white'}>
                    3
                  </Heading>
                </Circle>
              </Center>
              <Heading
                size={'md'}
                mt={4}
                bgGradient={
                  'radial( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )'
                }
                bgClip={'text'}
              >
                Share the link
              </Heading>
            </Box>
          </HStack>
        </Center>
      </Box>
    </Box>
  )
}

export default Content
