interface MenuItem {
    name: string;
    price: number;
    quantity: number;
}

class Cart {
    private items: MenuItem[] = [];

    addItem(item: MenuItem) {
        const existingItem = this.items.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
        this.updateOrderSummary();
    }

    clearCart() {
        this.items = [];
        this.updateOrderSummary();
    }

    getSummary() {
        return this.items;
    }

    private updateOrderSummary() {
        const orderSection = document.getElementById('order');
        if (!orderSection) return;

        // Limpa o conteúdo atual
        orderSection.innerHTML = `<h2>Pedidos</h2>`;
        
        if (this.items.length === 0) {
            orderSection.innerHTML += `<p>Seu carrinho está vazio.</p>`;
            return;
        }

        const ul = document.createElement('ul');
        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)} (Quantidade: ${item.quantity})`;
            ul.appendChild(li);
        });
        
        orderSection.appendChild(ul);

        const total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        orderSection.innerHTML += `<p>Total: R$ ${total.toFixed(2)}</p>`;

        // Adiciona botões de ação
        const clearButton = document.createElement('button');
        clearButton.textContent = 'Limpar Carrinho';
        clearButton.onclick = () => this.clearCart();
        
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.onclick = () => alert('Compra realizada com sucesso!');

        orderSection.appendChild(clearButton);
        orderSection.appendChild(buyButton);
    }
}

// Instância do carrinho
const cart = new Cart();

// Função para adicionar itens ao carrinho
function setupMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const button = item.querySelector('button');
        if (button) {
            button.onclick = () => {
                const name = item.querySelector('h3')?.textContent || '';
                const priceText = item.querySelector('span')?.textContent || 'R$ 0,00';
                const price = parseFloat(priceText.replace('R$ ', '').replace(',', '.'));
                const quantity = 1; // ou você pode modificar para permitir escolha de quantidade

                cart.addItem({ name, price, quantity });
            };
        }
    });
}

// Configuração inicial
document.addEventListener('DOMContentLoaded', setupMenu);
