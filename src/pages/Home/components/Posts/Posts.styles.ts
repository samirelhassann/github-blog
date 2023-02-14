import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  header {
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const PostsList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2rem;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
