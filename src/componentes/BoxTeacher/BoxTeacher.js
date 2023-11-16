import { Tipografia } from "../../style"
import { Div } from "../BoxTime/BoxTimeS"


export const BoxTeacher = () => {

    const estiloCustomizado = {
        gridTemplateRows: "1fr"
    };

    return(
        <>
            <Div style={estiloCustomizado}>  
                <Tipografia size="40px">   EXIBIÇÃO DAS AULAS DOS PROFESSORES  </Tipografia>
            </Div>
        </>
    )
}