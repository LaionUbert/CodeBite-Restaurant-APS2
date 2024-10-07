"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // Função para carregar as informações do cliente do localStorage e exibir na página
  function loadCustomerInfo() {
    const customerName = localStorage.getItem("customerName");
    const customerAddress = localStorage.getItem("customerAddress");
    const customerPhone = localStorage.getItem("customerPhone");
    const paymentMethod = localStorage.getItem("paymentMethod");
    // Exibir as informações do cliente nos elementos correspondentes
    if (customerName) {
      document.getElementById("customer-name").textContent = customerName;
    }
    if (customerAddress) {
      document.getElementById("customer-address").textContent = customerAddress;
    }
    if (customerPhone) {
      document.getElementById("customer-phone").textContent = customerPhone;
    }
    if (paymentMethod) {
      const paymentMethodDisplay =
        paymentMethod === "pix" ? "Pix" : "Cartão de Crédito";
      document.getElementById("payment-method").textContent =
        paymentMethodDisplay;
    }
  }
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
  // Carregar informações do cliente e resumo do pedido ao carregar a página
  loadCustomerInfo();
  loadOrderSummary();
});
