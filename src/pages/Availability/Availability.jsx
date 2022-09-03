import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Select,
  Spacer,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Checkbox,
  Input,
  Text,
  IconButton,
} from '@chakra-ui/react'
import { FcCalendar } from 'react-icons/fc'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'
import { FaCopy } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Ri24HoursLine } from 'react-icons/ri'

const TableRow = ({ day, handleCheckbox }) => {
  return (
    <Tr>
      <Td>
        <Checkbox onChange={handleCheckbox} defaultChecked />
      </Td>
      <Td>{day}</Td>
      <Td>
        <HStack>
          <Input type={'time'} defaultValue={'09:00'} />
          <Text>TO</Text>
          <Input type={'time'} defaultValue={'17:00'} />
        </HStack>
      </Td>
      <Td>
        <IconButton aria-label={'copy'} icon={<FaCopy />} bg={'transparent'} />
      </Td>
      <Td>
        <IconButton
          aria-label={'delete'}
          icon={<MdDelete />}
          bg={'transparent'}
        />
      </Td>
    </Tr>
  )
}

const Availability = () => {
  const handleCheckbox = (e) => {
    console.log(e.target.checked)
  }

  return (
    <Box p={16}>
      <HStack>
        <Icon as={FcCalendar} w={8} h={8} />
        <Heading size={'lg'}>Set your availability</Heading>
      </HStack>
      <Box m={12} p={8} boxShadow={'lg'} rounded={'lg'}>
        <HStack>
          <HStack>
            <Icon as={Ri24HoursLine} w={6} h={6} />
            <Heading size={'md'}>Working Hours</Heading>
          </HStack>
          <Spacer />
          <Button leftIcon={<AiOutlinePlus />}>New Schedule</Button>
          <IconButton
            aria-label={'settings'}
            icon={<IoMdSettings />}
            bg={'transparent'}
          />
        </HStack>
        <FormControl my={4}>
          <HStack>
            <FormLabel>Time Zone:</FormLabel>
            <Select name={'timeZone'} placeholder={'Select option'} w={'20%'}>
              <option value={'option1'}>Option 1</option>
              <option value={'option2'}>Option 2</option>
              <option value={'option3'}>Option 3</option>
            </Select>
          </HStack>
        </FormControl>
        <TableContainer border={'1px solid #edf2f7'} rounded={'md'}>
          <Table variant="simple">
            <Tbody>
              <TableRow day={'SUNDAY'} handleCheckbox={handleCheckbox} />
              <TableRow day={'MONDAY'} />
              <TableRow day={'TUESDAY'} />
              <TableRow day={'WEDNESDAY'} />
              <TableRow day={'THURSDAY'} />
              <TableRow day={'FRIDAY'} />
              <TableRow day={'SATURDAY'} />
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Availability
