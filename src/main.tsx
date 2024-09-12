import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Seleciona o elemento do DOM onde o React montará o aplicativo
const container = document.getElementById('root');

// Cria a raiz do React no elemento selecionado
const root = createRoot(container!); // O ponto de exclamação é para garantir que o container não é nulo

// Renderiza o aplicativo dentro do React.StrictMode no container especificado
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);