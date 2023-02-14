import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 2rem;
`;

export const ProfileImg = styled.img`
  border-radius: 8px;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const ProfileName = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: ${(props) => props.theme["base-title"]};
`;

export const ProfileDescription = styled.span`
  margin-top: 0.5rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const BulletDetails = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const BulletDetail = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["base-label"]};
    width: 18px;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const GitHubButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
  }
`;
