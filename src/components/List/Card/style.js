import styled, {css} from "styled-components"

export const StyledCard = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 0.875rem;
    background-color: var(--color-grey-1);
    margin-bottom: 0.9375rem;
    height: 5.4375rem;

    ${({border})=>{
        if(border === "entrada"){
            return css`
              border-left: 4px solid var(--color-color-secondary);
            `
        }else if(border === "despesa"){
            return css`
                 border-left: 4px solid var(--color-grey-2);
            `
        }
    }}

    h1{
        margin-bottom: 0.125rem;
    }
    button{
        margin-top: 0.375rem;
    }

    @media(max-width: 982px){
       flex-direction: column;
       height: 7.5rem;
       padding: 1rem 0.875rem;

    }
`
export const StyledDivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
` 
export const StyledAsideCard = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
`