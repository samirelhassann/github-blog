import styled from "styled-components";

export const Container = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${({ theme }) => theme["base-post"]};
  border-radius: 10px;
  cursor: pointer;  

  span {
    line-height: 160%;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme["base-text"]};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  line-height: 160%;

  header {
    line-height: 160%;
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme["base-title"]};
  }

  span {
    line-height: 160%;
    font-weight: 400;
    font-size: 14px;
    margin-top: 0.3125rem;

    color: ${({ theme }) => theme["base-span"]};
  }
`;
