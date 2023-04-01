import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Tooltip,
  Text,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink as ReachLink } from 'react-router-dom';

interface ProductCardProps {
  imageURL: string;
  productName: string;
  productCategory: string;
  productDescription: string;
  productPrice: number;
  productId: string;
}

export function ProductCard({
  imageURL,
  productName,
  productCategory,
  productDescription,
  productPrice,
  productId }: ProductCardProps) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <LinkBox
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg" 
        position="relative">

        <Image
          src={imageURL}
          alt={`Picture of ${productName}`}
          roundedTop="lg"
        />

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
              {productName}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <LinkOverlay
                as={ReachLink} to={`/product/${productId}`} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </LinkOverlay>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Text noOfLines={1}>{productDescription}</Text>
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                R$
              </Box>
              {productPrice.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </LinkBox>
    </Flex>
  );
}