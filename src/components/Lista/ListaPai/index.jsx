import { ListaEstilizada, TituloEstilizado } from "./Styles"

const Lista = ({children}) => {
    return (
        <>
        <TituloEstilizado>Lista</TituloEstilizado>
        <ListaEstilizada>{children}</ListaEstilizada>        
        </>
        
    )
}

export default Lista