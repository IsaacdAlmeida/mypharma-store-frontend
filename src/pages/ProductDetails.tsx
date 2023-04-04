import { Header } from '../components/headers/Header';
import { ProductDetailCard } from '../components/cards/ProductDetailCard';
import { useToast } from '@chakra-ui/react';
import { PageLoading } from '../components/loaders/PageLoading';
import type { RootState } from '../redux/store';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { addToCart } from '../redux/reducers/cartSlice';

export function ProductDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const selectProductById = (state: RootState, paramId: string) => {
    return state.products.arrayOfProducts.find(item => item._id === paramId);
  };

  const productSelected = useAppSelector((
    state: RootState) => id ? selectProductById(state, id) : undefined);

  interface Product {
    _id: string;
    productName: string;
    price: number;
    category: string;
    description: string;
    productImageURL: string;
  }

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));

    toast({
      title: 'Adicionado ao Carrinho',
      description: `${product.productName} adicionado ao carrinho`,
      status:'success',
      duration: 3000,
    });
  };

  return (
    <div>
      <Header />
      {
        !productSelected
          ? <PageLoading />
          : <ProductDetailCard
              imageURL={productSelected.productImageURL}
              productName={productSelected.productName}
              productDescription={productSelected.description}
              productPrice={productSelected.price}
              onAddToCart={() => handleAddToCart(productSelected)}
            />
      }
    </div>
  );
}
