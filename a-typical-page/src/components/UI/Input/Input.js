import styled from "styled-components";

const Input = styled.input`
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;

export default Input;
