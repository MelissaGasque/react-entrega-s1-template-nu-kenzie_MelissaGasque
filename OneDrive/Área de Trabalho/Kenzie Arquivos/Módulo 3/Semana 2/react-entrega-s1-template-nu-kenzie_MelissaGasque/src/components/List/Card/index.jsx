import { Text_title_1, Text_1, Text_2  } from "../../../styles/Typography"
import { StyledButton } from "../../../styles/Button"
import { StyledCard, StyledDivCard, StyledAsideCard } from "../../List/Card/style"


export function Card({note, removeNoteFromList}){
    return(
        <StyledCard border={entrada}>
            <StyledDivCard>
                <Text_title_1>{note.description}</Text_title_1>
                <Text_1 >{note.selectedOption}</Text_1>
            </StyledDivCard>
            <StyledAsideCard>
                <Text_2>{`R$ ${Number(note.amount).toFixed(2)}`}</Text_2>
                <StyledButton onClick={()=> removeNoteFromList(note.id)}>Excluir</StyledButton>
            </StyledAsideCard>
        </StyledCard>    
    )
}