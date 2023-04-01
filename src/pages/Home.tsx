import { ProductCard } from '../components/cards/ProductCard';
import Header from '../components/headers/Header';
import { Grid, VStack, useColorModeValue } from '@chakra-ui/react';

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

  return (
    <div>
      <Header />
      <div>
        <VStack
          spacing={4}
          pt="3" bg={useColorModeValue('gray.100', 'blackAlpha.100')}
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
              mockProduct.map((item) => (
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


// - search por nome do produto
// - tela de detalhes do produtos -> Página de detalhes do produtos
// - filtro por categoria (ex: frios, laticínios) -> SideBar com as categoria
// - ordenação (ex: menor preço, maior preço, nome) -> Botão de filtro/Popover?
// - botão de adicionar e remover do carrinho de compras // dentro do card
// - carrinho de compras (não é necessário implementar checkout) // pagina
//   apenas valor total no carrinho // checkout com total no carrinho
// Backend com Node publicado: