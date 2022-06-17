import { useState } from "react";
import styled from 'styled-components'
import { Container } from "../../Styles";

//css pelo styled components
const InputWrapper = styled.div`
  width: 100%;
`

const Formulario = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();

  const alterarNome = (e) => {
    setNome(e.target.value);
  };

  return (
    <Container>
      <h2>Formulário</h2>
      <InputWrapper>
        <input
          value={nome}
          onChange={alterarNome}
          placeholder="Digite seu nome"
        />
        {nome}
      </InputWrapper>
      <InputWrapper>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        {email}
      </InputWrapper>
    </Container>
  );
};

export default Formulario;
