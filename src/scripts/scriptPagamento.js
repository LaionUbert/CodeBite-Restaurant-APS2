document.addEventListener("DOMContentLoaded", () => {
  // Função para carregar o pedido do localStorage e exibir o resumo
  function loadOrderSummary() {
    const orderData = localStorage.getItem("orderData");
    const orderSummaryElement = document.getElementById("order-summary");

    if (!orderSummaryElement || !orderData) return;

    const items = JSON.parse(orderData);
    if (!items || items.length === 0) {
      orderSummaryElement.innerHTML = "<p>Seu carrinho está vazio.</p>";
      return;
    }

    let summaryHTML = "<ul>";
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

    summaryHTML += "</ul>";
    summaryHTML += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
    orderSummaryElement.innerHTML = summaryHTML;
  }

  // Exibir ou esconder as informações do cartão de crédito com base no método de pagamento
  const paymentMethodRadios = document.querySelectorAll(
    'input[name="payment-method"]'
  );
  const cardInfoSection = document.getElementById("card-info");
  const pixImageSection = document.getElementById("pix-image");
  const pixMessage = document.getElementById("pix-message");

  paymentMethodRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const selectedPaymentMethod = event.target.value;
      if (selectedPaymentMethod === "cartao") {
        cardInfoSection.style.display = "block";
        pixImageSection.style.display = "none";
        pixMessage.style.display = "none";
      } else {
        cardInfoSection.style.display = "none";
        pixImageSection.style.display = "block";
        pixMessage.style.display = "block"; // Exibe a mensagem
      }
    });
  });

  // Botão "Limpar Dados" - Limpa os campos do formulário
  const clearDataButton = document.getElementById("clear-data");
  clearDataButton &&
    clearDataButton.addEventListener("click", () => {
      const paymentForm = document.getElementById("payment-form");
      paymentForm && paymentForm.reset();
      cardInfoSection.style.display = "none"; // Esconde as informações do cartão
      pixImageSection.style.display = "none"; // Esconde a imagem do Pix
      pixMessage.style.display = "none"; // Esconde a mensagem do Pix
    });

  // Botão "Limpar Pedido" - Redireciona de volta para a página de menu (home)
  const clearCartButton = document.getElementById("clear-cart");
  clearCartButton &&
    clearCartButton.addEventListener("click", () => {
      localStorage.removeItem("orderData");
      window.location.href = "/src/home.html"; // Redireciona para a página home
    });

  // Função para redirecionar à página de entrega
  function redirectToDeliveryPage() {
    setTimeout(() => {
      window.location.href = "/src/pages/entrega.html";
    }, 500); // Aguarda 500ms antes do redirecionamento
  }

  // Botão "Realizar Pedido" - Validação dos campos do formulário
  const placeOrderButton = document.getElementById("place-order");
  placeOrderButton &&
    placeOrderButton.addEventListener("click", (event) => {
      event.preventDefault(); // Previne o comportamento padrão de submissão do formulário

      const nameInput = document.getElementById("nome-cliente");
      const addressInput = document.getElementById("endereco-cliente");
      const phoneInput = document.getElementById("telefone-cliente");
      const cardNumberInput = document.getElementById("card-number");
      const cardOwnerCpfInput = document.getElementById("card-owner-cpf");
      const cardOwnerNameInput = document.getElementById("card-owner-name");
      const cardCvvInput = document.getElementById("card-cvv");

      // Verificação de campos obrigatórios
      if (
        !nameInput.value ||
        !addressInput.value ||
        !phoneInput.value ||
        (cardInfoSection.style.display === "block" &&
          (!cardNumberInput.value ||
           !cardOwnerCpfInput.value ||
           !cardOwnerNameInput.value ||
           !cardCvvInput.value))
      ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      // Armazenar os dados no localStorage
      localStorage.setItem("customerName", nameInput.value);
      localStorage.setItem("customerAddress", addressInput.value);
      localStorage.setItem("customerPhone", phoneInput.value);

      // Obter a opção de pagamento selecionada
      const selectedPaymentMethod = Array.from(paymentMethodRadios).find(
        (radio) => radio.checked
      );

      if (selectedPaymentMethod) {
        localStorage.setItem("paymentMethod", selectedPaymentMethod.value);
      } else {
        localStorage.setItem("paymentMethod", "");
      }

      // Chamar a função para redirecionar
      redirectToDeliveryPage();
    });

  // Carregar e exibir o resumo do pedido ao carregar a página
  loadOrderSummary();
});
