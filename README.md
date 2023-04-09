# MyPharma - Desafio Técnico

## Introdução

Desafio técnico que consiste em construir uma aplicação full stack para um e-commerce de Farmácia.

O Front End tem os seguintes requisitos:

- Front End em React
- Deploy da aplicação
- Search por nome do produto
- Tela de detalhes do produtos
- Filtro por categoria
- Ordenação (ex: menor preço, maior preço, nome)
- Botão de adicionar e remover do carrinho de compras
- Carrinho de compras

## Ferramentas utilizadas

- React
- TypeScript
- Redux RTK
- Javascript
- Lint
- Chakra UI
- Axios

## Instruções para utilizar a aplicação

Para utilizar a aplicação você precisará ter o [Docker](https://www.docker.com/) instalado, optei por utilizar Docker no projeto para que o ambiente rode em qualquer máquina sem problemas, por exemplo, estou utilizando Linux, mas com Docker a aplicação pode subir em qualquer sistema operacional sem conflitos de pacote.

Primeiro você irá clonar o repositório, utilizando a chave SSH, com o seguinte comando:

```bash
git clone git@github.com:IsaacdAlmeida/mypharma-store-frontend.git
```

Após o clone do projeto, você deve utilizar comando `docker-compose up -d` na raíz do projeto, onde está localizado o docker-compose, e acessar a aplicação na porta 3000 pelo seguinte link:

```bash
http://localhost:3000
```

Caso não utilize o docker, você precisará ter o [node](https://nodejs.org/en/download/) e [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instalados.

Após instalação dos aplicativos acima você deverá clonar o repositório.

```bash
git clone git@github.com:IsaacdAlmeida/mypharma-store-frontend.git
```

Entre na pasta raiz do projeto e utilize o comando `npm install` para instalar as dependências do projeto.

Após instalar todos os pacotes, utilize o comando `npm start` para exibir a página da aplicação, a aplicação ficará disponível em:

```bash
http://localhost:3000
```

## Requisitos do Projeto

No projeto em questão, foi desenvolvido o Front End em React com TypeScript, atendendo aos requisitos solicitados. A aplicação foi implantada e está disponível online para uso.

A aplicação possui uma funcionalidade de pesquisa que permite ao usuário buscar produtos pelo nome. Além disso, há uma tela de detalhes do produto que exibe informações adicionais sobre um produto selecionado.

A funcionalidade de filtro por categoria permite que o usuário filtre os produtos por categoria, facilitando a navegação e a busca por produtos específicos. A ordenação por preço e nome também está disponível, permitindo ao usuário ordenar os produtos de acordo com sua preferência.

A aplicação possui botões para adicionar e remover produtos do carrinho de compras, além de exibir o conteúdo atual do carrinho de compras. Isso permite ao usuário gerenciar os produtos que deseja comprar e visualizar facilmente o que já foi adicionado.

O código da aplicação é limpo, legível e de fácil manutenção, seguindo as melhores práticas de desenvolvimento. Além disso, alguns requisitos extras foram implementados, como a geração dinâmica da sessão de categoria com base nas informações do banco de dados, modo escuro, uso de lint para manter a consistência e padronização.

Em resumo, a aplicação atendeu a todos os requisitos solicitados, com código limpo e legível, e alguns recursos adicionais foram implementados.

## Uso do TypeScript e Lint

No projeto, foi feito uso do Typescript e Lint como ferramentas de desenvolvimento. Essas ferramentas são essenciais para melhorar o entendimento do código, tornando-o mais legível, organizado e menos propenso a erros.

O Typescript é um superset do Javascript que adiciona recursos de tipagem estática, permitindo que os desenvolvedores detectem erros de digitação e de tipos de dados em tempo de compilação, em vez de ter que descobri-los durante a execução do programa. Isso aumenta a segurança e a robustez do código, facilitando a manutenção e a evolução do projeto.

O Lint, por sua vez, é uma ferramenta que ajuda a manter o código consistente e padronizado, seguindo as melhores práticas de codificação. Ele verifica automaticamente o código em busca de problemas comuns, como erros de sintaxe, formatação incorreta e variáveis não utilizadas, ajudando a reduzir a ocorrência de bugs e tornando o código mais fácil de entender e manter.

Em resumo, o uso do Typescript e do Lint no projeto trouxe benefícios significativos para a qualidade e a manutenção do código, tornando-o mais confiável, legível e consistente.

## Uso do Redux toolkit

No projeto em questão, foi utilizado o Redux Toolkit, uma biblioteca de gerenciamento de estado baseada no Redux, que simplifica e agiliza a implementação do Redux em aplicações. O Redux é uma biblioteca que permite gerenciar o estado de uma aplicação de forma centralizada, tornando-a mais previsível e fácil de entender.

A importância do uso do Redux no desenvolvimento de aplicações é sua capacidade de controlar o fluxo de dados da aplicação, evitando a necessidade de passar propriedades e estados entre os componentes de forma complexa e propensa a erros. Com o Redux, é possível gerenciar o estado de forma global, garantindo uma visão mais completa e simplificada da aplicação.

O Redux Toolkit, por sua vez, é uma versão moderna do Redux, que inclui diversas funcionalidades úteis para agilizar o desenvolvimento, como o Redux DevTools, que permite visualizar o estado e a ação em tempo real, além de várias outras ferramentas.

Além disso, no projeto, foi utilizado o redux-persist, uma biblioteca que permite persistir o estado do Redux no armazenamento local, como o localStorage do navegador, mesmo depois de atualizar a página. Isso ajuda a melhorar a experiência do usuário, pois permite que ele volte à aplicação e continue de onde parou, sem precisar iniciar novamente.

Em resumo, o uso do Redux Toolkit, juntamente com o redux-persist, foi fundamental para garantir uma aplicação mais organizada, previsível e fácil de manter, tornando a experiência do usuário mais agradável e eficiente.

## Design Responsivo, modo escuro e Chakra-ui

No projeto em questão, é utilizado um design responsivo para garantir que a aplicação se adapte a diferentes tamanhos de tela, proporcionando uma experiência do usuário agradável em todos os dispositivos.

Além disso, a aplicação conta com uma função de modo noturno, oferecendo uma experiência mais agradável e facilitando a leitura em situações de baixa luminosidade. Combinado com o design responsivo, a aplicação garante uma experiência do usuário consistente e eficiente em todos os dispositivos.

Também fiz uso do Chakra UI, uma biblioteca de componentes UI para React que ajuda a criar interfaces de usuário acessíveis e responsivas. O Chakra UI oferece uma ampla variedade de componentes, como botões, inputs e modais, que podem ser personalizados e combinados para criar interfaces únicas e elegantes. Sua abordagem declarativa, permite descrever a aparência e o comportamento de um componente de forma clara e concisa.

## Estrutura da aplicação

### Components

O Diretório guarda todos os componentes que podem ser reutilizados em nossa aplicação.

Por exemplo, o componente `Header.tsx` é renderizado em algumas das páginas.

### Pages

Responsável por armazenar todos as páginas de nossa aplicação onde serão renderizados os componentes.

### Redux

Armazena toda a lógica do redux para gerenciar o estado da aplicação.

### Services

Armazena os arquivos responsáveis por fazer as chamadas às APIs necessárias para funcionamento da aplicação, dessa forma evitamos repetição de código, bastando chamar a função necessária em qualquer lugar do código para invocar a API.

### Style

Armazena os arquivos responsáveis por fazer a estilização da aplicação. Armazena o arquivo necessário para configurar os temas globais do Chakra UI.

### Arquivo App.tsx

Onde é renderizada as páginas de nossa aplicação, onde configuramos as rotas das páginas utilizando `react-router-dom`, onde utilizamos o provider do Redux.

### Arquivo index.tsx

O arquivo raíz da aplicação React, responsável por configurar alguns elementos, como o Chakra Provider e BrowserRouter.

## Deploy da Aplicação

A aplicação também está disponível [nesse site](https://mypharma.vercel.app/). O Deploy foi feito utilizando Vercel, o que permite o uso da aplicação por qualquer pessoa.

## Histórico de commits

Você pode verificar todo o histório de commits para saber como a aplicação foi desenvolvida passo a passo, todos eles foram feitos com base no guia de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), mantendo uma organização e descrição objetiva do que foi feito a cada mudança!
