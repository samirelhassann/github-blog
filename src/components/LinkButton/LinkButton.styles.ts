import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.blue};

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`;
