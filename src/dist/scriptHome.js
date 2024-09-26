var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
        this.orderSummaryElement = document.getElementById("order-summary");
    }
    
    Cart.prototype.clearCart = function () {
        this.items = [];
        this.updateOrderSummary();
    };
    
    Cart.prototype.addItem = function (item) {
        this.items.push(item);
        this.updateOrderSummary();
    };
    
    Cart.prototype.updateOrderSummary = function () {
        if (!this.orderSummaryElement)
            return;

        // Limpa o conteúdo atual antes de adicionar novos itens
        this.orderSummaryElement.innerHTML = "<ul></ul>";
        var ul = this.orderSummaryElement.querySelector("ul");

        this.items.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            ul.appendChild(li);
        });

        // Adiciona o total após os itens
        this.orderSummaryElement.innerHTML += `<p>Total: R$ ${this.getTotal().toFixed(2)}</p>`;
    };
    
    Cart.prototype.getTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    
    return Cart;
}());

var clearCartButton = document.getElementById("clear-cart");
if (clearCartButton) {
    clearCartButton.addEventListener("click", function () {
        cart.clearCart();
    });
}

// Instância do carrinho
var cart = new Cart();

// Função para adicionar itens ao carrinho
function setupMenu() {
    var menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(function (item) {
        var button = item.querySelector("button");
        if (button) {
            button.onclick = function () {
                var name = item.querySelector("h3")?.textContent || "";
                var priceText = item.querySelector("span")?.textContent || "R$ 0,00";
                var price = parseFloat(priceText.replace("R$ ", "").replace(",", "."));
                cart.addItem({ name: name, price: price });
            };
        }
    });
}

// Configuração inicial
document.addEventListener("DOMContentLoaded", setupMenu);
