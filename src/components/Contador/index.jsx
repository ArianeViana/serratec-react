import { useState } from "react"
import { Container } from "../../Styles"
import { Botao, BotaoZerar, MensagemErro, Titulo } from "./Styles"

const Contador = () => {
   
    const [numero, setNumero] = useState(0)
    const [erro, setErro] = useState(false)

    const alterarNumero = () => {
        if(numero >= 10){
            setErro(true)
            return
        }

        setNumero(numero + 1)
    }

    const zerar = () => {
        setNumero(0)
        setErro(false)
    }

    return(
        <Container>
            <Titulo>Contando até 10!</Titulo>
            {
                erro &&(
                    <MensagemErro>Não é possível acrescentar mais.</MensagemErro>
                )
            }
            <Botao onClick={() => alterarNumero()}>Aumentar</Botao>
            <BotaoZerar onClick={() => zerar()} variant="contained" disabled={numero === 0}>Zerar</BotaoZerar>
            <Texto valor={numero} />           
        </Container>
    )
}

//Prop
const Texto = ({valor}) => {
    return <span>{valor}</span>
}

export default Contador