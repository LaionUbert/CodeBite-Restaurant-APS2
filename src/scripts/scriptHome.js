"use strict";
class ShoppingCart {
  constructor(orderSummaryId) {
    this.items = [];
    const element = document.getElementById(orderSummaryId);
    if (!element) {
      throw new Error(`Elemento com ID '${orderSummaryId}' não encontrado.`);
    }
    this.orderSummaryElement = element;
    this.renderCart();
  }
  addItem(item) {
    const existingItem = this.items.find(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
    this.renderCart();
  }
  clearCart() {
    this.items = [];
    this.renderCart();
  }
  renderCart() {
    if (this.items.length === 0) {
      this.orderSummaryElement.innerHTML = `<p id="order-total">Carrinho vazio.</p>`;
      return;
    }
    let summaryHTML = `<ul>`;
    let total = 0;
    this.items.forEach((item) => {
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
    summaryHTML += `<p id="order-total"><strong>Total: R$ ${total.toFixed(
      2
    )}</strong></p>`;
    this.orderSummaryElement.innerHTML = summaryHTML;
  }
  getItems() {
    return this.items;
  }
}
// Função para formatar o preço string para número
function parsePrice(priceString) {
  const cleaned = priceString
    .replace("R$", "")
    .replace(".", "")
    .replace(",", ".")
    .trim();
  return parseFloat(cleaned);
}
// Inicialização após o DOM estar carregado
document.addEventListener("DOMContentLoaded", () => {
  const cart = new ShoppingCart("order-summary");
  // Adicionar item ao carrinho ao clicar no botão
  const addToCartButtons = document.querySelectorAll(".menu-item button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      var _a;
      event.preventDefault();
      const menuItem = button.closest(".menu-item");
      if (!menuItem) return;
      const nameElement = menuItem.querySelector("h3");
      const priceElement = menuItem.querySelector("span");
      if (!nameElement || !priceElement) return;
      const name =
        ((_a = nameElement.textContent) === null || _a === void 0
          ? void 0
          : _a.trim()) || "Item sem nome";
      const priceText = priceElement.textContent || "R$ 0,00";
      const price = parsePrice(priceText);
      const quantity = 1; // Assume quantity as 1 for now
      const item = {
        name,
        price,
        quantity,
      };
      cart.addItem(item);
    });
  });
  // Botão "Limpar Carrinho"
  const clearCartButton = document.getElementById("clear-cart");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", (event) => {
      event.preventDefault();
      cart.clearCart();
    });
  }
  // Botão "Finalizar Pedido"
  const placeOrderButton = document.getElementById("place-order");
  if (placeOrderButton) {
    placeOrderButton.addEventListener("click", (event) => {
      event.preventDefault();
      const items = cart.getItems();
      if (items.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
      }
      // Salvar os dados do pedido no localStorage
      localStorage.setItem("orderData", JSON.stringify(items));
      // Redirecionar para a página de pagamento
      window.location.href = "/src/pages/pagamento.html";
    });
  }
});
