# DOCUMENTAÇÃO/MANUAL

# Índice

- [DOCUMENTAÇÃO/MANUAL](#documentaçãomanual)
- [Índice](#índice)
- [1. Documentação do Software](#1-documentação-do-software)
    - [1.1. **Introdução**](#11-introdução)
    - [1.2. **Visão Geral do Sistema**](#12-visão-geral-do-sistema)
    - [1.3. **Funcionalidades**](#13-funcionalidades)
    - [1.4. **Requisitos do Sistema**](#14-requisitos-do-sistema)
    - [1.5. **Segurança**](#15-segurança)
    - [1.6. **Manutenção e Suporte**](#16-manutenção-e-suporte)
- [2. **Manual de Utilização**](#2-manual-de-utilização)
    - [2.1 **Manual do Cliente**](#21-manual-do-cliente)
    - [2.2 **Manual do Restaurante**](#22-manual-do-restaurante)


# 1. Documentação do Software

### 1.1. **Introdução**

- **1.1.1. Propósito**
    - O objetivo do software é fornecer uma plataforma online que permita o restaurante gerenciar seu cardápio, receber pedidos, e processar pagamentos, enquanto os clientes podem navegar pelo menu, fazer pedidos e acompanhar o status dos mesmos.
    - Benefícios incluem:
        - **Para Restaurantes:** Aumentar o alcance de vendas, melhorar a gestão de pedidos, e oferecer uma experiência de compra mais conveniente.
        - **Para Clientes:** Facilidade em acessar o menu, personalizar pedidos, pagar online, e acompanhar o status dos pedidos em tempo real.
- **1.1.2. Público-Alvo**
    - **Restaurantes:** Donos e gerentes de restaurantes que desejam oferecer um serviço de vendas online.
    - **Clientes Finais:** Usuários que desejam comprar alimentos de restaurantes através da internet.

### 1.2. **Visão Geral do Sistema**

- **1.2.1. Arquitetura do Sistema**
    - **Front-end:** Desenvolvido utilizando HTML5 para estrutura, CSS3 para estilização e design responsivo, e TypeScript para lógica de interações dos usuários.
    - **Back-end:** Desenvolvido utilizando TypeScript e responsável pela comunicação com APIs para processamento de pagamento e gestão de pedidos.
    - **Banco de Dados:** Gerenciamento das informações de pratos, pedidos, e clientes.
- **1.2.2. Tecnologias Utilizadas**
    - **Linguagens:** HTML5, CSS3, TypeScript.
    - **Ferramentas e Plataformas:** Visual Studio Code para desenvolvimento, Git para controle de versão, e plataformas de deploy como Netlify ou Vercel.

### 1.3. **Funcionalidades**

- **1.3.1. Para o Cliente**
    - **Seleção de Pratos**
        - **Navegação pelo menu:** Interface que permite ao cliente visualizar os pratos disponíveis.
        - **Filtros e categorias:** Opções para refinar a busca por pratos com base em categorias, preços, etc.
    - **Compra e Pagamento**
        - **Adição de itens ao carrinho:** Função para adicionar pratos selecionados ao carrinho de compras.
        - **Opções de pagamento:** Integração com métodos de pagamento como cartões de crédito/débito e carteiras digitais.
    - **Acompanhamento do Pedido**
        - **Status do pedido:** Visualização em tempo real do status do pedido (em preparo, a caminho, entregue).
- **1.3.2. Para o Restaurante**
    - **Gestão de Menu**
        - **Adição, edição e remoção de pratos:** Interface para que o restaurante gerencie os itens do menu.
        - **Definição de preços e descrições:** Função para ajustar os preços e adicionar ou modificar descrições e imagens dos pratos.
    - **Gestão de Pedidos**
        - **Recebimento e confirmação de pedidos:** Visualização de novos pedidos e confirmação para início do preparo.
        - **Atualização de status do pedido:** Possibilidade de atualizar o status do pedido conforme ele progride.

### 1.4. **Requisitos do Sistema**

- **1.4.1. Requisitos de Hardware**
    - Servidores para hospedagem do site.
    - Computadores ou dispositivos móveis para acesso ao sistema por clientes e restaurantes.
- **1.4.2. Requisitos de Software**
    - Navegadores compatíveis com HTML5, CSS3 e TypeScript.
    - Servidores web como Apache ou Nginx.
- **1.4.3. Requisitos de Rede**
    - Conexão de internet estável para acesso ao site e para comunicação entre front-end e back-end.

### 1.5. **Segurança**

- **1.5.1. Proteção de Dados**
    - Uso de HTTPS para garantir a segurança das transações de dados entre o cliente e o servidor.
    - Armazenamento seguro de dados sensíveis, como informações de pagamento.
    - Total comprometimento com a segurança dos dados do software com base na LGPD.
- **1.5.2. Autenticação e Autorização**
    - Implementação de mecanismos de autenticação para garantir que apenas usuários autorizados acessem funcionalidades específicas, como a gestão do menu ou a finalização de compras.

### 1.6. **Manutenção e Suporte**

- **1.6.1. Atualizações do Software**
    - Atualizações regulares para correção de bugs, melhorias de segurança e introdução de novas funcionalidades.
- **1.6.2. Suporte Técnico**
    - Contato para suporte técnico disponível em horários específicos, com canais de comunicação como e-mail ou chat online.

# 2. **Manual de Utilização**

### 2.1 **Manual do Cliente**

- **2.1.1. Criação de Conta**
    - Passo a passo para registro, incluindo preenchimento de dados pessoais e confirmação por e-mail.
- **2.1.2. Navegação pelo Menu**
    - Instruções sobre como visualizar o menu e aplicar filtros ou categorias para encontrar pratos.
- **2.1.3. Seleção e Compra de Pratos**
    - Procedimento para selecionar pratos e adicioná-los ao carrinho de compras.
- **2.1.4. Pagamento**
    - Descrição das opções de pagamento disponíveis e como proceder para concluir a compra.
- **2.1.5. Acompanhamento do Pedido**
    - Instruções para verificar o status do pedido e visualizar o histórico de pedidos anteriores.
- **2.1.6. Suporte e Contato**
    - Informações sobre como entrar em contato com o suporte para resolver problemas ou tirar dúvidas.

### 2.2 **Manual do Restaurante**

- **2.2.1. Criação e Configuração de Conta**
    - 1 - Acessar o website
    - 2 - Acessar a tela de sign-in
    - 3 - Selecionar o cadastro dos dados como membro do restaurante
    - 4 - Preencher dados de cadastro
    - 5 - Realizar log-in após a autenticação
- **2.2.2. Atualização do Cardápio de Pratos**
    - 1 - Entrar nas opções de Menu
    - 2 - Selecionar o componente do cardápio a ser editado
    - 3 - Editar o componente
    - 4 - Salvar as informações
- **2.2.3. Recebimento e Gerenciamento de Pedidos**
    - Instruções sobre como visualizar e confirmar novos pedidos e atualizar seu status.
- **2.2.4. Logística de Entrega**
    - Configuração das áreas de entrega, gerência de entregadores, e horários de entrega.
- **2.2.5. Relatórios e Análises**
    - Como acessar relatórios de vendas e analisar o desempenho do restaurante.
- **2.2.6. Suporte e Manutenção**
    - 1 - Entrar em contato com a equipe de suporte da CleanCode por meio de e-mail ou telefone
    - 2 - Abrir novo chamado
    - 3 - Especificar o problema
    - 4 - Prosseguir com as instruções da equipe de suporte.