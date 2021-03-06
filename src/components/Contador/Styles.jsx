import styled from "styled-components";
import Button from '@mui/material/Button';

export const Titulo = styled.h2`
  font-size: 20px;
  font-family: sans-serif;
  color: violet;
`;

export const Botao = styled.button`
  background-color: #4e034e;
  color: #fff;
  border: 1px solid #ae66ae;
  padding: 7px;
  margin-right: 10px;
  border-radius: 5px;

  &:hover{
    background-color: #780778;
  }
`

export const MensagemErro = styled.p`
  color: red;
  font-style: italic;
`

export const BotaoZerar = styled(Button)`
  &&{
    width: 73px;
  height: 31px;
  margin-right: 10px;
  }
  
`