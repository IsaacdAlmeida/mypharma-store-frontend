import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';

interface OrderSummaryItemProps {
  label: string;
  value?: string;
  children?: React.ReactNode;
}

function OrderSummaryItem({
  label,
  value,
  children,
}: OrderSummaryItemProps) {
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
}

export function CartOrderSummary() {
  const cartItems = useAppSelector((
    state: RootState) => state.cart.cartItems);

  const cartTotal:number = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = 0;
  const discount = 0;

  const totalPrice = cartTotal + shipping - discount;


  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Resumo do Pedido</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal"
        value={`R$ ${cartTotal.toFixed(2)}`} />
        <OrderSummaryItem label="Frete">
          <Link href="#" textDecor="underline">
            Calcular Frete
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Cupom de desconto">
          <Link href="#" textDecor="underline">
            Adicionar Cupom
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {`R$ ${totalPrice.toFixed(2)}`}
          </Text>
        </Flex>
      </Stack>
      <Button 
        colorScheme="blue" 
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
      >
        Finalizar Pedido
      </Button>
    </Stack>
  );
}
