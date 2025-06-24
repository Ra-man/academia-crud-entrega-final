
// Formulário para adicionar ou editar aluno
import React, { useState, useEffect } from "react";

function AlunoForm({ onAdd, onUpdate, editAluno }) {
  const [form, setForm] = useState({ nome: "", cpf: "", telefone: "", email: "" });

  useEffect(() => {
    if (editAluno) {
      setForm(editAluno);
    }
  }, [editAluno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editAluno) {
      onUpdate(form);
    } else {
      onAdd(form);
    }
    setForm({ nome: "", cpf: "", telefone: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
      <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} required />
      <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <button type="submit">{editAluno ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
}

export default AlunoForm;
