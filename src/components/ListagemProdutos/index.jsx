import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Titulo = styled.h2`
  margin: 20px;
`;

const ListagemProdutos = ({ children }) => {
  return (
    <>
      <Titulo>Listagem de Produtos</Titulo>
      <Container>{children}</Container>
    </>
  );
};

export default ListagemProdutos;
