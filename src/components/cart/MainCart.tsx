import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { NavLink as ReachLink } from 'react-router-dom';
import { CartOrderSummary } from './CartOrderSummary';
import { CartItem } from './CartItem';
import { removeFromCart } from '../../redux/reducers/cartSlice';

export function MainCart() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((
    state: RootState) => state.cart.cartItems);

  const totalQuantity = cartItems
    .reduce((total, item) => total + item.quantity, 0);

  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            {`Carrinho de compras (${totalQuantity} Itens)`}
          </Heading>

          <Stack spacing="6">
            { cartItems.length === 0
              ? 'No cart items'
              : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.productName}
                    image={item.productImageURL}
                    name={item.productName}
                    price={item.price * item.quantity}
                    quantity={item.quantity}
                    onClickDelete={() => dispatch(removeFromCart(item._id))}
                    id={item._id}
                  />
                ))
              )
            }
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>Ou</p>
            <Link 
              as={ReachLink} to={'/home'}
              color={mode('blue.500', 'blue.200')}
            >
              Continue Comprando
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}