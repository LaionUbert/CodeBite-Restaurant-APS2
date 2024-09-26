var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
        this.orderSummaryElement = null;
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
        var _this = this;
        if (!this.orderSummaryElement)
            return;
        this.orderSummaryElement.innerHTML = "\n        <ul>";
        this.items.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = "".concat(item.name, " - R$ ").concat(item.price.toFixed(2));
            _this.orderSummaryElement.appendChild(li);
        });
        this.orderSummaryElement.innerHTML += "</ul>\n        <p>Total: R$ ".concat(this.getTotal().toFixed(2), "</p>");
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
                var _a, _b;
                var name = ((_a = item.querySelector("h3")) === null || _a === void 0 ? void 0 : _a.textContent) || "";
                var priceText = ((_b = item.querySelector("span")) === null || _b === void 0 ? void 0 : _b.textContent) || "R$ 0,00";
                var price = parseFloat(priceText.replace("R$ ", "").replace(",", "."));
                cart.addItem({ name: name, price: price });
            };
        }
    });
}
// Configuração inicial
document.addEventListener("DOMContentLoaded", setupMenu);