import React from "react";

import { Container, Header } from "./Post.styles";

interface PostProps {
  tile: string;
  createdAt: string;
  description: string;
  onClick: () => void;
}

const Post = ({ tile, createdAt, description, onClick }: PostProps) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <Container onClick={handleOnClick}>
      <Header>
        <header>{tile}</header>
        <span>{createdAt}</span>
      </Header>

      <span>{description}</span>
    </Container>
  );
};

export default Post;
