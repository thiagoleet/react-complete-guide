import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background-color: white;
  border-color: blue;
  color: blue;
  border-style: solid;
  border-width: 1px;
  padding: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    max-width: 250px;
  }

  &:hover,
  &:active {
    background-color: blue;
    color: white;
  }
`;

export default Button;
