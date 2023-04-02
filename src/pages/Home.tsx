import { ProductCard } from '../components/cards/ProductCard';
import { Header } from '../components/headers/Header';
import { Grid, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { SearchInput } from '../components/forms/SearchInput';
import { SearchIcon } from '@chakra-ui/icons';
import { MenuDrawer } from '../components/sidebar/MenuDrawer';
import { FilterList } from '../components/forms/FilterList';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../redux/store';

export function Home() {
  const mockProduct = [
    { 
      id: '2',
      name: 'Remédio',
      price: 1000,
      category: 'medicamentos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://picsum.photos/id/73/400/400',
    },
    { 
      id: '4',
      name: 'Product 5',
      price: 25.12,
      category: 'cosméticos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://picsum.photos/id/75/400/400',
    },
    { 
      id: '5',
      name: 'Product 6',
      price: 525.12,
      category: 'cosméticos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://picsum.photos/id/200/400/400',
    },
    { 
      id: '6',
      name: 'Product9',
      price: 25111.12,
      category: 'alimentos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://picsum.photos/id/12/400/400',
    },
    { 
      id: '7',
      name: 'aksmdkadsa',
      price: 2533.12,
      category: 'Cuidado Infantil',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://picsum.photos/id/37/400/400',
    },
    { 
      id: '8',
      name: 'Hidaeasadsne',
      price: 2544.12,
      category: 'Higiene',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://picsum.photos/id/145/400/400',
    },
  ];

  interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
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
    ? mockProduct.filter(product => product.category === selectedCategory)
    : mockProduct;

  const sortFunctions = {
    'asc': (a: Product, b:Product) => a.name.localeCompare(b.name),
    'desc': (a: Product, b:Product) => b.name.localeCompare(a.name),
    'price-asc': (a: Product, b:Product) => a.price - b.price,
    'price-desc': (a: Product, b:Product) => b.price - a.price,
  };

  type SortType = keyof typeof sortFunctions;

  const products = filteredProducts
    .filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase()))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .sort(sortFunctions[selectedFilter as SortType] || ((a, b) => 0));

  return (
    <div>
      <Header />
      <MenuDrawer
        buttonName='Categorias'
        headerText='Categorias'
        categories={mockProduct.map(item => item.category)}
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
                  key={item.name}
                  imageURL={item.image}
                  productName={item.name}
                  productPrice={item.price}
                  productCategory={item.category}
                  productId={item.id}
                />
              ))
            }
          </Grid>
      </VStack>
      </div>
    </div>
  );
}

// - tela de detalhes do produtos -> Página de detalhes do produtos
// - botão de adicionar e remover do carrinho de compras // dentro do card
// - carrinho de compras (não é necessário implementar checkout) // pagina
//   apenas valor total no carrinho // checkout com total no carrinho
