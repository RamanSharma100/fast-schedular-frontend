import {
  Badge,
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useMediaQuery,
} from '@chakra-ui/react'

import { NavLink as RouterLink } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'

import Logo from '../../../assets/brand/logo.png'

const Navbar = () => {
  const [isLessThan768] = useMediaQuery('(max-width: 768px)')

  const { auth } = useSelector(
    (state) => ({
      auth: state.auth,
    }),
    shallowEqual
  )

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      p={4}
      px={12}
      shadow={'md'}
    >
      <Link as={RouterLink} to={'/'} _hover={{ textDecor: 'none' }}>
        <HStack gap={2}>
          <Image src={Logo} alt={'fastschedular logo'} height={50} width={50} />
          {!isLessThan768 && (
            <Heading size={'md'} fontWeight={'bolder'} color={'brand.500'}>
              FastSchedular{' '}
              <Badge variant={'solid'} bg={'blue.500'}>
                Dashboard
              </Badge>
            </Heading>
          )}
        </HStack>
      </Link>
      <Spacer />
      <HStack gap={5}>
        <Link
          as={RouterLink}
          to={'/dashboard'}
          _hover={{ textDecor: 'none' }}
          _activeLink={{ color: 'blue.500', fontWeight: 'bold' }}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          _activeLink={{ color: 'blue.500', fontWeight: 'bold' }}
          to={'/dashboard/availability'}
          _hover={{ textDecor: 'none' }}
        >
          Availability
        </Link>
        <Link
          as={RouterLink}
          to={'/dashboard/help'}
          _hover={{ textDecor: 'none' }}
          _activeLink={{ color: 'blue.500', fontWeight: 'bold' }}
        >
          Help
        </Link>

        {auth && auth.logged && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              rounded={'full'}
              variant="outline"
            >
              {auth.user.name.split(' ')[0][0].toUpperCase()}
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuList>
          </Menu>
        )}
      </HStack>
    </Box>
  )
}

export default Navbar
