import * as Dialog from "@radix-ui/react-dialog";

import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["base-background"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["base-input"]};
      color: ${(props) => props.theme["base-span"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["base-span"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme["base-input"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;

      cursor: pointer;

      &:disabled {
        opacity: 0.6;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["base-label"]};
        transition: all ease 0.3s;
      }
    }
  }
`;

export const InfoError = styled.span`
  color: ${({ theme }) => theme.red};
`;
