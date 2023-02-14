import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  BulletDetail,
  BulletDetails,
  Container,
  GitHubButtonContainer,
  ProfileDescription,
  ProfileDetails,
  ProfileImg,
  ProfileName,
  TitleContainer,
} from "./ProfileCard.styles";

import LinkButton from "../../../../components/LinkButton/LinkButton";
import SkeletonComponent from "../../../../components/SkeletonLoading/SkeletonLoading";

interface ProfileCardProps {
  img?: string;
  name?: string;
  description?: string;
  gitName?: string;
  companyName?: string;
  githubLink?: string;
  followers?: number;
  isLoading?: boolean;
}

const ProfileCard = ({
  img,
  name,
  description,
  gitName,
  companyName,
  githubLink,
  followers,
  isLoading,
}: ProfileCardProps) => {
  return (
    <Container>
      {isLoading ? (
        <SkeletonComponent width={155} height={140} variant="rounded" />
      ) : (
        <ProfileImg src={img} width={148} alt="profile picture" />
      )}

      <ProfileDetails>
        <TitleContainer>
          <ProfileName>
            {isLoading ? <SkeletonComponent width={200} height={40} /> : name}
          </ProfileName>

          {!isLoading && (
            <a href={githubLink}>
              <LinkButton>
                <GitHubButtonContainer>
                  <span>github</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
                </GitHubButtonContainer>
              </LinkButton>
            </a>
          )}
        </TitleContainer>
        <ProfileDescription>
          {isLoading ? (
            <>
              <SkeletonComponent width={500} height={40} />
            </>
          ) : (
            description
          )}
        </ProfileDescription>

        <BulletDetails>
          {isLoading ? (
            <SkeletonComponent width={100} height={40} />
          ) : (
            <BulletDetail>
              <FontAwesomeIcon icon={faGithub} />
              <span>{gitName}</span>
            </BulletDetail>
          )}

          {isLoading ? (
            <SkeletonComponent width={100} height={40} />
          ) : (
            <BulletDetail>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{companyName}</span>
            </BulletDetail>
          )}

          {isLoading ? (
            <SkeletonComponent width={100} height={40} />
          ) : (
            <BulletDetail>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{followers} followers</span>
            </BulletDetail>
          )}
        </BulletDetails>
      </ProfileDetails>
    </Container>
  );
};

export default ProfileCard;
