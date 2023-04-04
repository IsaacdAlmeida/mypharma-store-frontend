import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

interface ProductDetailCardProps {
  imageURL: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  onAddToCart: () => void;
}

export function ProductDetailCard({
  imageURL,
  productName,
  productDescription,
  productPrice,
  onAddToCart }: ProductDetailCardProps) {
  return (
    <Box
      maxW="7xl" mx="auto" 
      px={{ base: '0', lg: '12' }}
      py={{ base: '0', lg: '12' }}
    >
      <Stack 
        direction={{ base: 'column-reverse', lg: 'row' }}
        spacing={{ base: '0', lg: '20' }}
      >
        <Box
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={
            { 
              base: useColorModeValue('teal.50', 'gray.700'), 
              lg: 'transparent' }
          }
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading 
                size="xl" 
                color={useColorModeValue('teal.500', 'teal.300')}
              >
                { productName }
              </Heading>
              <Heading size="md" fontWeight="normal">
                {productDescription}
              </Heading>
            </Stack>
            <Box
              fontSize="xl"
              color={useColorModeValue('teal.500', 'teal.300')}
            >
              <Box as="span" color={'gray.600'} fontSize="lg">
                R$ 
              </Box>
              {productPrice.toFixed(2)}
            </Box>
            <HStack spacing="3">
              <Link 
                color={useColorModeValue('teal.500', 'teal.300')}
                fontWeight="bold" fontSize="lg"
                onClick={onAddToCart}
              >
                Adicione ao Carrinho
              </Link>
              <Icon 
                color={useColorModeValue('teal.500', 'teal.300')} 
                as={FiShoppingCart} 
              />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src={imageURL}
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
      </Stack>
    </Box>
  );
} 