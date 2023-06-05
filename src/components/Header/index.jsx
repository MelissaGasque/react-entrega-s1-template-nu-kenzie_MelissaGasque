import logo from "../../assets/logoLM.png"

import { StyledContainer } from "../../styles/container"
import { StyledHeader } from "./style.js"

export function Header(){
    return(
        <StyledHeader>
            <StyledContainer>
                <img 
                src={logo} 
                alt="Logo NuKenzie. A silava Nu possui a cor vermelha e Kenzie a cor preta"
                />
            </StyledContainer>
        </StyledHeader>
    )
}