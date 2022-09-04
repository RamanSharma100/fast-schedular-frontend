import React, { Suspense } from 'react'
import { Box, Button, HStack, Icon, Spacer, Text } from '@chakra-ui/react'
import { shallowEqual, useSelector } from 'react-redux'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const UpcomingMeetings = React.lazy(() => import('../UpcomingMeetings'))

const DashHome = () => {
  const { auth } = useSelector(
    (state) => ({
      auth: state.auth,
    }),
    shallowEqual
  )

  const navigate = useNavigate()

  return (
    <Box p={16}>
      <HStack>
        <Text fontSize={'2xl'} textTransform={'capitalize'}>
          Welcome,{' '}
          <span style={{ fontWeight: 'bold', color: '#3182CE' }}>
            {auth?.user.name}
          </span>
        </Text>
        <Spacer />
        <Button
          onClick={() => navigate('/dashboard/event/create')}
          mx="auto"
          variant={'solid'}
          bg={'blue.600'}
          gap={2}
          color={'white'}
          _hover={{ bg: 'blue.500' }}
        >
          <Icon as={AiOutlinePlusCircle} w={5} h={5} /> Create Event
        </Button>
      </HStack>

      <Suspense fallback={<div>Loading...</div>}>
        <UpcomingMeetings />
      </Suspense>
    </Box>
  )
}

export default DashHome
