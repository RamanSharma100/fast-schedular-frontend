import { Box, Text } from '@chakra-ui/react'

import React from 'react'

import Meetings from './Meetings'

const UpcomingMeetings = () => {
  return (
    <Box mt={18}>
      <Box w={'100%'} py={10} rounded={'base'}>
        <Text
          fontSize={'xl'}
          px={5}
          pb={5}
          borderBottom={'0.2px solid rgba(0, 0, 0, 0.2)'}
          fontWeight={'light'}
        >
          Upcoming Meetings
        </Text>
      </Box>
      <Meetings />
    </Box>
  )
}

export default UpcomingMeetings
