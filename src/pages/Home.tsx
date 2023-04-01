import Header from '../components/headers/Header';

export function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}


// search por nome do produto
// - tela de detalhes do produtos -> Página de detalhes do produtos
// - filtro por categoria (ex: frios, laticínios) -> SideBar com as categoria
// - ordenação (ex: menor preço, maior preço, nome) -> Botão de filtro/Popover?
// - botão de adicionar e remover do carrinho de compras // dentro do card
// - carrinho de compras (não é necessário implementar checkout) // pagina
//   apenas valor total no carrinho // checkout com total no carrinho
// Backend com Node publicado: