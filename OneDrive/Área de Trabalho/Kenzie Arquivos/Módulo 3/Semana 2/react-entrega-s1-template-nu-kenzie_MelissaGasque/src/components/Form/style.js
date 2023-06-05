import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: var(--color-white);
    padding: 30px 20px;

    input{
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;
    }
    select{
        margin-top: 0.625rem;
    }

    button{
        margin-top: 1.625rem;
    }
    p{
        margin-bottom: 9px;
    }
`
export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 38%;
    margin-right: 3.6875rem;

    @media(max-width: 982px){
        flex-grow: 1;
        min-width: clamp(150px, 100%, 982px);
    }
`