import styled, { css } from "styled-components"

export const ZeroStyle = css`
	text-decoration: none;
	text-transform: none;
`
export const OneStyle = css`
	font-family: "Nunito";
	font-weight: 700;
	font-style: bold;
`

export const TwoStyle = css`
	font-size: 0.75rem;
	font-weight: 400;
	font-style: normal;
	line-height: 1.625rem;
`


// descrição card
export const Text_title_1 = styled.h1`
	${ZeroStyle};
	${OneStyle};
	font-size: 1rem;
	line-height: 1.875rem;
	color: var(--color-grey-4);
`
//Frase Sem Card
export const Text_title_2 = styled.h1`
	${ZeroStyle};
	${OneStyle};
 	font-size: 1.375rem;
 	line-height: 2.125rem;
	color: var(--color-grey-3);
`
//Valor total
export const Text_title_3 = styled.h1`
	${ZeroStyle};
	${OneStyle};
	font-size: 1.375rem;
 	line-height: 2.125rem;
	color: var(--color-color-primary);	
`

export const Text_1 = styled.p`
	${ZeroStyle};
	${TwoStyle};
	font-family:var(--Font-nunito);
	color: var(--color-grey-3);
`
export const Text_2 = styled.p`
	${ZeroStyle};
	${TwoStyle};
	font-family: var(--Font-nunito);
	color: var(--color-grey-4);
	
`
export const Text_3 = styled.p`
	${ZeroStyle};
	${TwoStyle};
	font-family: var(--Font-inter);
	color: var(--color-grey-4);
	
`
export const Text_4 = styled.p`
	${ZeroStyle};
	${TwoStyle};
	font-family: var(--Font-inter);
	color: var(--color-grey-3);
	
`

