import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Tooltip,
  Link,
  Button,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink as ReachLink } from 'react-router-dom';

interface ProductCardProps {
  imageURL: string;
  productName: string;
  productCategory: string;
  productPrice: number;
  productId: string;
  onAddToCart: () => void;
}

export function ProductCard({
  imageURL,
  productName,
  productCategory,
  productPrice,
  productId,
  onAddToCart }: ProductCardProps) {
  return (
    <Flex p={30} w="full" alignItems="center" justifyContent="center"
    >
      <Box
        bg={useColorModeValue('gray.100', 'blackAlpha.100')}
        minW="180px"
        maxW="300px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg" 
        position="relative">
        <Link 
          as={ReachLink} to={`/product/${productId}`}
          style={{ textDecoration: 'none' }}
        >
          <Image
            src={imageURL}
            alt={`Picture of ${productName}`}
            roundedTop="lg"
            boxSize="300"
            fallbackSrc='https://via.placeholder.com/500'
            objectFit="cover"
          />
        </Link>

        <Box p="6">
          <Box alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              {productCategory}
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              <Link
                as={ReachLink} to={`/product/${productId}`}
                style={{ textDecoration: 'none' }}
              >
              {productName}
              </Link>
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                R$ 
              </Box>
              {productPrice.toFixed(2)}
            </Box>
            <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <Button variant="ghost" onClick={onAddToCart}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </Button>
              </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}