
// Página principal que exibe a lista e o formulário
import React, { useState, useEffect } from "react";
import AlunosList from "../components/AlunosList";
import AlunoForm from "../components/AlunoForm";
import api from "../services/api";

function AlunosPage() {
  const [alunos, setAlunos] = useState([]);
  const [editAluno, setEditAluno] = useState(null);

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    const response = await api.get("/alunos");
    setAlunos(response.data);
  };

  const handleAdd = async (aluno) => {
    await api.post("/alunos", aluno);
    fetchAlunos();
  };

  const handleUpdate = async (aluno) => {
    await api.put(`/alunos/${aluno.id}`, aluno);
    setEditAluno(null);
    fetchAlunos();
  };

  const handleDelete = async (id) => {
    await api.delete(`/alunos/${id}`);
    fetchAlunos();
  };

  const handleEditClick = (aluno) => {
    setEditAluno(aluno);
  };

  return (
    <div>
      <h1>Cadastro de Alunos</h1>
      <AlunoForm onAdd={handleAdd} onUpdate={handleUpdate} editAluno={editAluno} />
      <AlunosList alunos={alunos} onDelete={handleDelete} onEdit={handleEditClick} />
    </div>
  );
}

export default AlunosPage;
