document.addEventListener('DOMContentLoaded', () => {
  // Função para carregar o pedido do localStorage e exibir o resumo
  function loadOrderSummary(): void {
    const orderData = localStorage.getItem('orderData');
    const orderSummaryElement = document.getElementById('order-summary');

    if (!orderSummaryElement || !orderData) return;

    const items: Array<{ name: string; price: number; quantity: number }> = JSON.parse(orderData);
    if (!items || items.length === 0) {
      orderSummaryElement.innerHTML = '<p>Seu carrinho está vazio.</p>';
      return;
    }

    let summaryHTML = '<ul>';
    let total = 0;

    items.forEach((item) => {
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

    summaryHTML += '</ul>';
    summaryHTML += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
    orderSummaryElement.innerHTML = summaryHTML;
  }

  // Exibir ou esconder as informações do cartão de crédito com base no método de pagamento
  const paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
  const cardInfoSection = document.getElementById('card-info');
  const pixImageSection = document.getElementById('pix-image');
  const pixMessage = document.getElementById('pix-message');

  paymentMethodRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const selectedPaymentMethod = (event.target as HTMLInputElement).value;
      if (selectedPaymentMethod === 'cartao') {
        cardInfoSection!.style.display = 'block';
        pixImageSection!.style.display = 'none';
        pixMessage!.style.display = 'none';
      } else {
        cardInfoSection!.style.display = 'none';
        pixImageSection!.style.display = 'block';
        pixMessage!.style.display = 'block'; // Exibe a mensagem
      }
    });
  });

  // Botão "Limpar Dados" - Limpa os campos do formulário
  const clearDataButton = document.getElementById('clear-data');
  clearDataButton?.addEventListener('click', () => {
    const paymentForm = document.getElementById('payment-form') as HTMLFormElement;
    paymentForm.reset();
    cardInfoSection!.style.display = 'none'; // Esconde as informações do cartão
    pixImageSection!.style.display = 'none'; // Esconde a imagem do Pix
    pixMessage!.style.display = 'none'; // Esconde a mensagem do Pix
  });

  // Botão "Limpar Pedido" - Redireciona de volta para a página de menu (home)
  const clearCartButton = document.getElementById('clear-cart');
  clearCartButton?.addEventListener('click', () => {
    localStorage.removeItem('orderData');
    window.location.href = '/src/home.html'; // Redireciona para a página home
  });

  // Botão "Realizar Pedido" - Salva os dados e redireciona para a página de entrega
  const placeOrderButton = document.getElementById('place-order');
  placeOrderButton?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    // Armazenar os dados no localStorage
    localStorage.setItem('customerName', name);
    localStorage.setItem('customerAddress', address);
    localStorage.setItem('customerPhone', phone);

    // Obter a opção de pagamento selecionada
    const selectedPaymentMethod = Array.from(paymentMethodRadios).find(radio => radio.checked)?.value;
    localStorage.setItem('paymentMethod', selectedPaymentMethod || '');

    // Redirecionar para a página de entrega
    window.location.href = '/src/paginas/entrega.html';
  });

  // Carregar e exibir o resumo do pedido ao carregar a página
  loadOrderSummary();
});
