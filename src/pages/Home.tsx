import { useState } from 'react';
import { ProductCard } from '../components/cards/ProductCard';
import { Header } from '../components/headers/Header';
import { Grid, VStack } from '@chakra-ui/react';
import { SearchInput } from '../components/forms/SearchInput';
import { SearchIcon } from '@chakra-ui/icons';
import { MenuDrawer } from '../components/sidebar/MenuDrawer';
import { FilterList } from '../components/forms/FilterList';
import type { RootState } from '../redux/store';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { PageLoading } from '../components/loaders/PageLoading';
import { addToCart } from '../redux/reducers/cartSlice';

export function Home() {
  const dispatch = useAppDispatch();

  const productList = useAppSelector((
    state: RootState) => state.products.arrayOfProducts);

  interface Product {
    _id: string;
    productName: string;
    price: number;
    category: string;
    description: string;
    productImageURL: string;
  }

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(target.value);
  };

  const handleFilterChange = (filterValue: string) => {
    setSelectedFilter(filterValue);
  };

  const filteredProducts = selectedCategory
    ? productList.filter(product => product.category === selectedCategory)
    : productList;

  const sortFunctions = {
    'asc': (a: Product, b:Product) => a
      .productName.localeCompare(b.productName),
    'desc': (a: Product, b:Product) => b
      .productName.localeCompare(a.productName),
    'price-asc': (a: Product, b:Product) => a.price - b.price,
    'price-desc': (a: Product, b:Product) => b.price - a.price,
  };

  type SortType = keyof typeof sortFunctions;

  const products = filteredProducts
    .filter(product =>
      product.productName.toLowerCase().includes(searchText.toLowerCase()))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .sort(sortFunctions[selectedFilter as SortType] || ((a, b) => 0));
  
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  

  return (
    <div>
      <Header />
      {productList.length === 0
        ? <PageLoading />
        : (
          <>
            <MenuDrawer
              buttonName='Categorias'
              headerText='Categorias'
              categories={productList.map(item => item.category)}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <FilterList onFilterChange={handleFilterChange} />
            <SearchInput
              icon={<SearchIcon />}
              type="text"
              value={searchText}
              onChange={handleSearch}
              placeholder='Buscar Produto'
            />
            <div>
              <VStack
                spacing={4}
                pt="3" 
              >
                <Grid
                  templateColumns=
                    {['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                  gap={4}
                  width="100%"
                  maxWidth="1200px"
                  margin="0 auto"
                >
                  {
                    products.map((item) => (
                      <ProductCard
                        key={item.productName}
                        imageURL={item.productImageURL}
                        productName={item.productName}
                        productPrice={item.price}
                        productCategory={item.category}
                        productId={item._id}
                        onAddToCart={() => handleAddToCart(item)}
                      />
                    ))
                  }
                </Grid>
            </VStack>
            </div>
          </>
        )
      }
    </div>
  );
}

// - tela de detalhes do produtos -> Página de detalhes do produtos
// - botão de adicionar e remover do carrinho de compras // dentro do card
// - carrinho de compras (não é necessário implementar checkout) // pagina
//   apenas valor total no carrinho // checkout com total no carrinho
