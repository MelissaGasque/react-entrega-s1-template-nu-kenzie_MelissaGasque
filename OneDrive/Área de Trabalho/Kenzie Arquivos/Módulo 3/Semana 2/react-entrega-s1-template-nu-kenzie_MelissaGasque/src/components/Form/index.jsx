import { useState } from "react"
import { Select } from "./Select"
import { v4 as uuidv4 } from "uuid"
import { TotalMoney } from "../TotalMoney/index"

import { StyledInput } from "../../styles/form"
import { Text_3, Text_4 } from "../../styles/Typography"
import { StyledButton } from "../../styles/Button"
import { StyledForm, StyledSection } from "../Form/style"

export function Form({noteList, setNoteList}){

    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("1")
    const [selectedOption, setSelectedOption] = useState("")

    
    function addCardToList(){
        const newList = { id: uuidv4(),description, amount, selectedOption}
        setNoteList((noteList) => [...noteList, newList])
    }

    function submit(e){
        e.preventDefault()
        addCardToList()
        setDescription("")
        setAmount("")
        setSelectedOption("entrada")
    }

    return(
        <StyledSection>
            <StyledForm onSubmit={submit}> 
                <Text_3>Descrição</Text_3>
                <StyledInput
                    type="text" 
                    placeholder="Digite aqui sua descrição"
                    value = {description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Text_4>Ex: Compra de roupas</Text_4>
                <Text_3>Valor (R$)</Text_3>
                <StyledInput
                    type="number"
                    value = {amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />     
                <Text_3>Tipo de valor</Text_3>
                <Select 
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    required 
                /> 
                <StyledButton buttonInserirValor="big" type="submit" > Inserir valor </StyledButton>
            </StyledForm>
            
            <>
                {noteList.length > 0 ?(
                    <TotalMoney noteList={noteList}/>
                ):(
                    null
                )}
            </>
        </StyledSection>
    )
}