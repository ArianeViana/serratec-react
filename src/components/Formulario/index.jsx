import { useState } from "react";

const Formulario = () => {
  const [nome, setNome] = useState();

  const alterarNome = (e) => {
    setNome(e.target.value);
  };

  return (
    <>
      <h2>Formulário</h2>
      <input
        value={nome}
        onChange={alterarNome}
        placeholder="Digite seu nome"
      />
      {nome}
    </>
  );
};

export default Formulario;
