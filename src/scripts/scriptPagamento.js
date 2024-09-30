// src/scriptPagamento.js

document.addEventListener('DOMContentLoaded', () => {
    const orderData = JSON.parse(localStorage.getItem('orderData'));

    if (orderData) {
        const { customer, items } = orderData;

        // Exibir dados do cliente
        const customerInfoElement = document.createElement('div');
        customerInfoElement.innerHTML = `
            <h2>Dados do Cliente</h2>
            <p><strong>Nome:</strong> ${customer.name}</p>
            <p><strong>Endereço:</strong> ${customer.address}</p>
            <hr>
        `;
        document.body.insertBefore(customerInfoElement, document.getElementById('order-summary'));

        // Exibir resumo do pedido
        const summaryElement = document.getElementById('order-summary');
        if (summaryElement) {
            let summaryHTML = `<ul>`;
            let total = 0;

            items.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                summaryHTML += `
                    <li>
                        <strong>${item.name}</strong><br>
                        Quantidade: ${item.quantity}<br>
                        Preço Unitário: R$ ${item.price.toFixed(2)}<br>
                        Subtotal: R$ ${itemTotal.toFixed(2)}
                    </li>
                    <hr>
                `;
            });

            summaryHTML += `</ul>`;
            summaryHTML += `<p id="order-total"><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
            summaryElement.innerHTML = summaryHTML;
        }
    } else {
        alert('Nenhum pedido encontrado!');
    }

    // Ação para o botão "Limpar Carrinho"
    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            // Limpar os dados do localStorage
            localStorage.removeItem('orderData');

            // Redirecionar para a página inicial
            window.location.href = '/src/home.html';
        });
    }
});