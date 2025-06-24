
// Importa o axios para fazer as requisições HTTP
import axios from "axios";

// Cria a instância base da API
const api = axios.create({
  baseURL: "http://localhost:3001"  // Porta padrão do JSON Server
});

export default api;
