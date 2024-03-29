import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
      {
        id: 1,
        title: 'SmartFit Academia',
        value: 100,
        category: 'Contas Fixas',
        type: 'withdraw',
        createdAt: new Date('2022-07-10 09:00:00'),
      },
      {
        id: 2,
        title: 'Ajuda Casa',
        value: 500,
        category: 'Contas Fixas',
        type: 'withdraw',
        createdAt: new Date('2022-07-10 09:10:00'),
      },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
