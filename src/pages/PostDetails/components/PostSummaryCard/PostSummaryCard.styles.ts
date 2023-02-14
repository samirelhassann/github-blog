import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  gap: 2rem;
`;

export const PostTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: ${({ theme }) => theme["base-title"]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 160%;
    }
  }
`;

export const Bullets = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const BulletDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["base-label"]};
    width: 18px;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
