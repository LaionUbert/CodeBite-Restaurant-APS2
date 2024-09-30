"use strict";
// Função para exibir os dados do pedido salvos no sessionStorage
function displayOrderFromSession() {
    // Lê os dados do sessionStorage
    const orderData = sessionStorage.getItem("orderData");
    // Verifica se há dados salvos
    if (orderData) {
        // Converte o JSON armazenado de volta para um objeto
        const parsedData = JSON.parse(orderData);
        // Seleciona a lista onde os dados serão exibidos
        const orderSummary = document.getElementById("order-summary");
        // Cria elementos da lista com os dados do pedido
        const nomeLi = document.createElement("li");
        nomeLi.textContent = `Nome do Cliente: ${parsedData.nome}`;
        const enderecoLi = document.createElement("li");
        enderecoLi.textContent = `Endereço de Entrega: ${parsedData.endereco}`;
        const telefoneLi = document.createElement("li");
        telefoneLi.textContent = `Telefone: ${parsedData.telefone}`;
        const pedidosLi = document.createElement("li");
        pedidosLi.textContent = "Itens pedidos:";
        const pedidosUl = document.createElement("ul");
        parsedData.pedidos.forEach((pedido) => {
            const pedidoLi = document.createElement("li");
            pedidoLi.textContent = `${pedido.quantidade}x ${pedido.item} - R$ ${pedido.preco.toFixed(2)}`;
            pedidosUl.appendChild(pedidoLi);
        });
        // Adiciona os elementos à lista principal
        orderSummary.appendChild(nomeLi);
        orderSummary.appendChild(enderecoLi);
        orderSummary.appendChild(telefoneLi);
        pedidosLi.appendChild(pedidosUl);
        orderSummary.appendChild(pedidosLi);
    }
    else {
        // Caso não haja dados no sessionStorage
        document.getElementById("order-summary").textContent =
            "Nenhum pedido encontrado.";
    }
}
// Chama a função para exibir os dados ao carregar a página
window.onload = displayOrderFromSession;
