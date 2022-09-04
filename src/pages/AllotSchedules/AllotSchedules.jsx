import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Button, Text } from '@chakra-ui/react'
import AllotmentFrom from '../AllotmentForm/AllotmentFrom'

const AllotSchedules = () => {
  const { eventId } = useParams()
  const [eventData, setEventData] = React.useState(null)
  const [date, setDate] = React.useState(null)
  const [time, setTime] = React.useState(false)
  //   const [slots,]

  React.useEffect(() => {
    axios
      .get(`https://api.fastschedular.live/api/event/get/${eventId}`)
      .then((res) => {
        setEventData(res.data.event)
        setDate(res.data.event.eventDates[0])
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {!time ? (
        <Box w="100%" h="100%" p="2rem">
          <Text fontSize="2xl" fontWeight="bold" mb="1rem">
            Book Your Slots for{' '}
            <span style={{ color: '#3498CA', fontWeight: 'bold' }}>
              {eventData?.eventTitle}
            </span>
          </Text>

          <Box w="100%" h="100%" p="2rem">
            <Text fontSize="xl" fontWeight="bold" mb="1rem">
              Avalaible Dates
            </Text>

            <Box display={'flex'} gap={3} w="100%" h="100%" p="2rem">
              {[...new Set(eventData?.eventDates)].map((dt, index) => (
                <Button
                  fontSize="md"
                  key={index * 45}
                  bg={date === dt ? 'blue.600' : 'blue:500'}
                  color={date === dt && 'white'}
                  fontWeight="bold"
                  mb="1rem"
                  onClick={() => setDate(dt)}
                >
                  {dt}
                </Button>
              ))}
            </Box>
          </Box>
          <Box w="100%" h="100%" p="2rem">
            <Text fontSize="xl" fontWeight="bold" mb="1rem">
              Empty Slots
            </Text>
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              gap={3}
              w="100%"
              h="100%"
              p="2rem"
            >
              {eventData &&
                eventData.emptySlots[
                  [...new Set(eventData?.eventDates)].indexOf(date)
                ].map((dt, index) => (
                  <Button
                    fontSize="md"
                    variant="outline"
                    border={'3px solid #3498CA'}
                    fontWeight="bold"
                    mb="1rem"
                    key={index}
                    onClick={() => setTime(dt.time)}
                  >
                    {dt.time}
                  </Button>
                ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <AllotmentFrom eventId={eventId} date={date} time={time} />
      )}
    </>
  )
}

export default AllotSchedules
