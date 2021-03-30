import Button from '../commun/button'
import { Text } from '@chakra-ui/react'

const NavButton = ({ display, content, id, onClick, ...props }) => {
  return (
    <Button
      id={id}
      color="black"
      fontWeight="500"
      background="transparent"
      border="none"
      onClick={onClick}
      display={display}
      _hover={{ bg: 'primary.100' }}
    >
      <Text {...props}>{content}</Text>
    </Button>
  )
}

export default NavButton
