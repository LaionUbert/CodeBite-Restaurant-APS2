interface MenuItem {
  name: string;
  price: number;
}

class Cart {
  private items: MenuItem[] = [];
  private orderSummaryElement: HTMLElement | null = null;

  constructor() {
    this.orderSummaryElement = document.getElementById("order-summary");
  }

  clearCart() {
    this.items = [];
    this.updateOrderSummary();
  }

  addItem(item: MenuItem) {
    this.items.push(item);
    this.updateOrderSummary();
  }

  updateOrderSummary() {
    if (!this.orderSummaryElement) return;

    this.orderSummaryElement.innerHTML = `
        <ul>`;
    this.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
      this.orderSummaryElement.appendChild(li);
    });
    this.orderSummaryElement.innerHTML += `</ul>
        <p>Total: R$ ${this.getTotal().toFixed(2)}</p>`;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const clearCartButton = document.getElementById("clear-cart");
if (clearCartButton) {
  clearCartButton.addEventListener("click", () => {
    cart.clearCart();
  });
}

// Instância do carrinho
const cart = new Cart();

// Função para adicionar itens ao carrinho
function setupMenu() {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    const button = item.querySelector("button");
    if (button) {
      button.onclick = () => {
        const name = item.querySelector("h3")?.textContent || "";
        const priceText = item.querySelector("span")?.textContent || "R$ 0,00";
        const price = parseFloat(
          priceText.replace("R$ ", "").replace(",", ".")
        );

        cart.addItem({ name, price });
      };
    }
  });
}

// Configuração inicial
document.addEventListener("DOMContentLoaded", setupMenu);
