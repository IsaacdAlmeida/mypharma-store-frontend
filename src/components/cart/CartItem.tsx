import {
  CloseButton,
  Flex, 
  Link,
  Stack,
  Image,
  Box,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { QuantityPicker } from './QuantityPicker';

interface CartItemProps {
  name: string;
  quantity: number;
  image: string
  price: number;
  onClickDelete?: () => void;
}

export function CartItem({
  name,
  quantity,
  price,
  onClickDelete,
  image,
}: CartItemProps) {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between" align="center"
    >
      <Flex direction="row" alignItems="center" width="full">
        <Image
          rounded="lg"
          width="90px"
          height="90px"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pl="5px">
          <Stack spacing="0.5">
            <Text
              fontWeight="medium"
              fontSize="lg"
              isTruncated
            >
              {name}
            </Text>
          </Stack>
        </Box>
      </Flex>
      {/* Desktop */}
      <Flex width="full"
        justify="space-between"
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
      >
        <QuantityPicker
          value={quantity}
          onChange={() => {}}
          min={1}
          max={99}
        />
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {`R$ ${price.toFixed(2)}`}
        </Text>
        <CloseButton 
          aria-label={`Delete ${name} from cart`} onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantityPicker
          value={quantity}
          onChange={() => {}}
          min={1}
          max={99}
        />
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {`R$ ${price.toFixed(2)}`}
        </Text>
      </Flex>
    </Flex>
  );
}