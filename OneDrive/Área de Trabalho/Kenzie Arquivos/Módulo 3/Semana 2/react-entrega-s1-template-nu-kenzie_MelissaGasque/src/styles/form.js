import styled, { css } from "styled-components"

export const StyledInputSelect = css`
    width: 100%;
    height : 3rem;
    padding: 0.8375rem auto 0.8375rem 1.3125rem;

    font-family: var(--Font-inter);
    font-weight: 400;

    color: var(--color-grey-3);
    background-color: var(--color-grey-1);
    border-radius: 0.5rem;
    border: 2px solid var(--color-grey-1);
`
export const StyledInput = styled.input`
    ${StyledInputSelect}
    font-size: 1rem;
`
export const StyledSelect = styled.select`
    ${StyledInputSelect}
    font-size: 0.75rem;
`