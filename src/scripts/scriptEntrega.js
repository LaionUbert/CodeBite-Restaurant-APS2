// src/scriptEntrega.js

document.addEventListener('DOMContentLoaded', () => {
    const orderData = JSON.parse(localStorage.getItem('orderData'));

    if (orderData) {
        const summaryElement = document.getElementById('order-summary');
        if (summaryElement) {
            let summaryHTML = `<ul>`;
            let total = 0;

            orderData.items.forEach(item => {
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
});
