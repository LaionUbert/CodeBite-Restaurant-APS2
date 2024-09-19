interface MenuItem {
    name: string;
    description: string;
    price: number;
}

interface OrderItem {
    item: MenuItem;
    quantity: number;
}

class ShoppingCart {
    private items: OrderItem[] = [];

    addItem(item: MenuItem, quantity: number): void {
        const existingItem = this.items.find(orderItem => orderItem.item.name === item.name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ item, quantity });
        }
        this.updateOrderSummary();
    }

    clearCart(): void {
        this.items = [];
        this.updateOrderSummary();
    }

    private updateOrderSummary(): void {
        const orderSection = document.getElementById('order');
        if (orderSection) {
            orderSection.innerHTML = '<h2>Pedidos</h2>'; // Resetando a seção de pedidos
            if (this.items.length === 0) {
                orderSection.innerHTML += '<p>Carrinho vazio.</p>';
            } else {
                this.items.forEach(orderItem => {
                    orderSection.innerHTML += `<p>${orderItem.item.name} - R$ ${orderItem.item.price.toFixed(2)} x ${orderItem.quantity}</p>`;
                });
                this.addCheckoutButtons(orderSection);
            }
        }
    }

    private addCheckoutButtons(orderSection: HTMLElement): void {
        orderSection.innerHTML += `
            <button id="clear-cart">Limpar Carrinho</button>
            <button id="buy">Comprar</button>
        `;
        
        document.getElementById('clear-cart')?.addEventListener('click', () => this.clearCart());
        document.getElementById('buy')?.addEventListener('click', () => this.processPurchase());
    }

    private processPurchase(): void {
        if (this.items.length > 0) {
            alert('Compra realizada com sucesso!');
            this.clearCart();
        } else {
            alert('Seu carrinho está vazio!');
        }
    }
}

const cart = new ShoppingCart();

// Adicionando funcionalidade aos botões "Adicionar ao Carrinho"
const addButtons = document.querySelectorAll('.menu-item button');
addButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const menuItemDiv = (event.target as HTMLElement).closest('.menu-item');
        const name = menuItemDiv?.querySelector('h3')?.textContent;
        const description = menuItemDiv?.querySelector('p')?.textContent;
        const priceText = menuItemDiv?.querySelector('span')?.textContent;

        const priceMatch = priceText?.match(/R\$\s*(\d+,\d+)/);
        const price = priceMatch ? parseFloat(priceMatch[1].replace(',', '.')) : 0;

        if (name) {
            const menuItem: MenuItem = { name, description: description || '', price };
            cart.addItem(menuItem, 1); // Adicionando 1 unidade
        }
    });
});
