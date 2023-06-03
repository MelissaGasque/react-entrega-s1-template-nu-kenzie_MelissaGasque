import {StyledSelect} from "../../../styles/form"

export function Select({ value, onChange }){
  return (
    <StyledSelect value={value} onChange={onChange}>
      <option value="">Selecione uma opção</option>
      <option value="entrada">Entrada</option>
      <option value="despesa">Despesa</option>
    </StyledSelect>
  );
};

