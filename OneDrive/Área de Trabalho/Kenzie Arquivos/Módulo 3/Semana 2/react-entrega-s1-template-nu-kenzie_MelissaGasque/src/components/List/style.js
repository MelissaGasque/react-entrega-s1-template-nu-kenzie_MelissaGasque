import styled from "styled-components";

export const StyledSectionList = styled.section`
    width: 56%;
    height: 39.375rem;
    overflow-y: auto;

    h1{
        margin-bottom: 2rem;
    }

    @media(max-width: 982px){
        flex-grow: 1;
        min-width: clamp(150px, 100%, 982px);
    }
`
