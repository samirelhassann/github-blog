import styled from "styled-components";

export const ContentSearch = styled.input`
  height: 3.125rem;
  width: 100%;
  margin-top: 0.75rem;
  padding: 1rem 0.75rem;

  font-weight: 400;
  font-size: 16px;

  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-input"]};

  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 6px;

  ::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border: 1px solid #3294f8;
  }
`;
