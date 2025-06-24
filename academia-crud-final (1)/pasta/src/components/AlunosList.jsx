

import React from "react";
import "./AlunosList.css";  

function AlunosList({ alunos, onDelete, onEdit }) {
  return (
    <div>
      <h2>Lista de Alunos</h2>
      <table className="tabela-alunos">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.cpf}</td>
              <td>{aluno.telefone}</td>
              <td>{aluno.email}</td>
              <td>
                <button onClick={() => onEdit(aluno)}>Editar</button>
                <button onClick={() => onDelete(aluno.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlunosList;
