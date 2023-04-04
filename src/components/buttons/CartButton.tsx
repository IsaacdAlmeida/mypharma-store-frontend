import { Button, LinkBox } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink as ReachLink } from 'react-router-dom';


export function CartButton() {
  return (
    <LinkBox
      as={ReachLink} to={'/cart'}
      style={{ textDecoration: 'none' }}
    >
        <Button
          colorScheme='teal' 
          variant="solid"
          leftIcon={<FaShoppingCart />}
          fontWeight='bold'
          fontSize='md'
          textTransform='uppercase'
          width='100%'
        >
          Carrinho
        </Button>
    </LinkBox>
  );
}
