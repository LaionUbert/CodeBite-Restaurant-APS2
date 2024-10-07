const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Configurar pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Rota para salvar o pedido
app.post('/save-order', (req, res) => {
  const pedido = req.body;

  const filePath = path.join(__dirname, 'src/scripts/pedidos.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao ler o arquivo de pedidos' });
    }

    let pedidos = [];
    if (data) {
      pedidos = JSON.parse(data);
    }

    pedidos.push(pedido);

    fs.writeFile(filePath, JSON.stringify(pedidos, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao salvar o pedido' });
      }

      res.status(200).json({ message: 'Pedido salvo com sucesso!' });
    });
  });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
