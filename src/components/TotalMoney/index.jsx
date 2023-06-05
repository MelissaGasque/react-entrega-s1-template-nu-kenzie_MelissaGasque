import { Text_title_1, Text_title_3,  Text_2 } from "../../styles/Typography"
import { StyledTotalMoney, StyledDiv } from "./styles"

export function TotalMoney({noteList}){
    
    const resultado = noteList.reduce((acumulator, note)=>{
        let result = 0
        note.selectedOption == "entrada" ?(
        result  = acumulator + Number(note.amount)
        ):(
        result = acumulator - Number(note.amount)
        )
        return result
    }, 0)

    return(
        <StyledTotalMoney>
            <StyledDiv>
                <Text_title_1>Valor Total</Text_title_1>
                <Text_2>O valor se refere ao saldo</Text_2>
            </StyledDiv>
            <aside>
              <Text_title_3 >R$ {resultado.toFixed(2)}</Text_title_3>
            </aside>
        </StyledTotalMoney>
    )
}