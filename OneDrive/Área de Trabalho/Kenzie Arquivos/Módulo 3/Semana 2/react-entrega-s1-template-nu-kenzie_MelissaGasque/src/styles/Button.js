import styled, { css } from "styled-components"

export const StyledButton = styled.button`
    font-family: var(--Font-inter);
    ${({buttonInserirValor}) => {
        if(buttonInserirValor === "big"){
            return css`
               
                background-color: var(--color-color-primary);
                color: var(--color-white);
                width: 100%;
                height: 3rem;
                font-weight: 500;
                font-size: 1rem;
                padding: 0rem 1.25rem;
                border-radius: 0.5rem;
                border: 1px solid var(--color-color-primary);
            `
        }else{
            return css`
                background-color: var(--color-grey-2);
                color: var(--color-grey-4);
                width: 3rem;
                height: 1.1875rem;
                font-weight: 400;
                font-size: 0.625rem;
                padding: 0.1875rem 0.5625rem 0.125rem 0.5rem;
                border-radius: 0.125rem;
                border: 1px solid var(--color-grey-2);
            `
        }
    }}
`