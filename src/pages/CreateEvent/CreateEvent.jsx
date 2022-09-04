import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  Textarea,
  Spacer,
} from '@chakra-ui/react'
import { useState } from 'react'
import { DatePicker } from 'chakra-ui-date-input'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateEvent = () => {
  const [secondPage, setSecondPage] = useState(false)
  const [eventType, setEventType] = useState('group')
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventDates, setEventDates] = useState([])
  const [eventLocationType, setEventLocationType] = useState('google_meet')
  const [eventLocationLink, setEventLocationLink] = useState('')
  const [eventDuration, setEventDuration] = useState('15')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      eventType,
      eventTitle,
      eventDates,
      eventLocationType,
      eventDuration
    )
    if (
      !eventType ||
      !eventTitle ||
      !eventDates ||
      !eventLocationType ||
      !eventDuration
    ) {
      toast.error('Please fill all the fields!!')
      return
    }

    const data = {
      eventType,
      eventTitle,
      eventDescription,
      eventDates,
      eventLocationType,
      eventLocationLink,
      duration: eventDuration,
    }

    const token = JSON.parse(localStorage.getItem('fs-user')).token
    axios
      .post('https://api.fastschedular.live/api/event/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success('Event Created Successfully!!')

        navigate('/dashboard')
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  return (
    <Flex
      minW={'100vw'}
      w={'full'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={8} w={'100%'} mx={'auto'} maxW={'lg'} py={12}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Create Event
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Create an event to schedule a meeting with your friends
            </Text>
          </Stack>
          <Box rounded={'lg'} border={'1px solid #000'} w={'full'} p={8}>
            {!secondPage ? (
              <Stack spacing={4}>
                <HStack>
                  <Box w={'100%'}>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Event Type</FormLabel>
                      <Select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                      >
                        <option selected value="group">
                          group
                        </option>
                        <option value="one_to_one">One to One</option>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box w={'100%'}>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Event Title</FormLabel>
                      <Input
                        type="text"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <Box w={'100%'}>
                  <FormControl id="eventDescription">
                    <FormLabel>Event Description</FormLabel>
                    <Textarea
                      placeholder="enter description"
                      size="sm"
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box w={'100%'}>
                  <FormControl id="location" isRequired>
                    <FormLabel>Event Location</FormLabel>
                    <Select
                      value={eventLocationType}
                      onChange={(e) => setEventLocationType(e.target.value)}
                    >
                      <option selected value="google_meet">
                        Google Meet
                      </option>
                      <option value="custom_link">Custom Link</option>
                      <option value="custom_location">Custom Location</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box w={'100%'}>
                  <FormControl id="event_link">
                    <FormLabel>Event Link</FormLabel>
                    <Input
                      type="text"
                      value={eventLocationLink}
                      onChange={(e) => setEventLocationLink(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Stack spacing={10} pt={2}>
                  <Spacer />
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    onClick={() => setSecondPage(true)}
                  >
                    Next
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <Stack spacing={4}>
                <HStack>
                  <Box w={'100%'}>
                    <FormControl id="eventStartDate" isRequired>
                      <FormLabel>Start Date</FormLabel>
                      <DatePicker
                        placeholder="Pick Date"
                        name="date"
                        onChange={(date) =>
                          setEventDates((prevDates) => [date, ...prevDates])
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box w={'100%'}>
                    <FormControl id="eventEndDate" isRequired>
                      <FormLabel>End Date</FormLabel>
                      <DatePicker
                        placeholder="Pick Date"
                        name="date"
                        onChange={(date) =>
                          setEventDates((prevDates) => [...prevDates, date])
                        }
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <Box w={'100%'}>
                  <FormControl id="duration" isRequired>
                    <FormLabel>Slot Duration</FormLabel>
                    <Select
                      value={eventDuration}
                      onChange={(e) => setEventDuration(e.target.value)}
                    >
                      <option selected value="15">
                        15 min
                      </option>
                      <option value="30">30 min</option>
                      <option value="60">60 min</option>
                    </Select>
                  </FormControl>
                </Box>
                <HStack spacing={10} gap={2} pt={2}>
                  <Button
                    loadingText="Submitting"
                    variant="outline"
                    size="lg"
                    bg={'white'}
                    color={'black'}
                    _hover={{
                      bg: 'white',
                    }}
                    width={'50%'}
                    onClick={() => setSecondPage(false)}
                  >
                    Back
                  </Button>
                  <Spacer />
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    width={'50%'}
                    type="submit"
                  >
                    Create Event
                  </Button>
                </HStack>
              </Stack>
            )}
          </Box>
        </Stack>
      </form>
    </Flex>
  )
}

export default CreateEvent
