
// Importa as bibliotecas principais do React e as rotas
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlunosPage from "./pages/AlunosPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AlunosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
