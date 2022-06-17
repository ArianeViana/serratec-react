import { useState } from "react"
import './styles.css'

const Contador = () => {
   
    const [numero, setNumero] = useState(0)

    const alterarNumero = () => {
        if(numero >= 10){
            alert("não é possível")
            return
        }

        setNumero(numero + 1)
    }

    return(
        <div className="contador-wrapper">
            <h2>Contando até 10!</h2>
            <button onClick={() => alterarNumero()}>Aumentar</button>
            <span>{numero}</span>           
        </div>
    )
}

export default Contador