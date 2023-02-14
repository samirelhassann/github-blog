import React from "react";
import { Link } from "react-router-dom";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import {
  BulletDetail,
  Bullets,
  ButtonsContainer,
  Container,
  PostTitle,
} from "./PostSummaryCard.styles";

import LinkButton from "../../../../components/LinkButton/LinkButton";
import MainContent from "../../../../components/MainContent/MainContent";

interface PostSummaryCardProps {
  title: string;
  userName: string;
  createdAt: Date;
  gitLink: string;
  commentsQuantity: number;
}

const PostSummaryCard = ({
  title,
  userName,
  createdAt,
  gitLink,
  commentsQuantity,
}: PostSummaryCardProps) => {
  return (
    <MainContent>
      <Container>
        <ButtonsContainer>
          <Link to="/">
            <LinkButton>
              <div>
                <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                <span>voltar</span>
              </div>
            </LinkButton>
          </Link>

          <a href={gitLink}>
            <LinkButton>
              <div>
                <span>ver no github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
              </div>
            </LinkButton>
          </a>
        </ButtonsContainer>

        <div>
          <PostTitle>{title}</PostTitle>

          <Bullets>
            <BulletDetail>
              <FontAwesomeIcon icon={faGithub} />
              <span>{userName}</span>
            </BulletDetail>

            <BulletDetail>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>
                {formatDistanceToNow(createdAt, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </BulletDetail>

            <BulletDetail>
              <FontAwesomeIcon icon={faComment} />
              <span>{commentsQuantity} comentários</span>
            </BulletDetail>
          </Bullets>
        </div>
      </Container>
    </MainContent>
  );
};

export default PostSummaryCard;
