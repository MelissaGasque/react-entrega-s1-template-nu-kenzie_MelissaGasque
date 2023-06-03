// import { TotalMoney } from "../TotalMoney"
import { Card } from "./Card"
import { Text_title_1, Text_title_2 } from "../../styles/Typography"
import { StyledSectionList } from "./style"

export function List({noteList, setNoteList}){
    
    function removeNoteFromList(noteID){
        setNoteList(noteList.filter(note => note.id !== noteID ))
    }

    return(
    <StyledSectionList>
        <Text_title_1>Resumo Financeiro</Text_title_1>
        <ul>
            {noteList.length > 0 ?(
               noteList.map((note)=> <Card key={note.id} note={note} removeNoteFromList={removeNoteFromList}/>)
            ):(
                <Text_title_2>Você ainda não possui nenhum lançamento</Text_title_2>
            )}
        </ul>
    </StyledSectionList>
    ) 
}