import React from "react";
import { useNavigate } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContextSelector } from "use-context-selector";

import {
  Container,
  LabelsContainer,
  PostHeader,
  PostsList,
} from "./Posts.styles";

import { GithubContext } from "../../../../contexts/GithubContext";
import Post from "../Post/Post";
import SearchForm from "../SearchForm/SearchForm";
import Selector from "../Selector/Selector";

const Posts = () => {
  const navigate = useNavigate();

  const posts = useContextSelector(GithubContext, (context) => {
    return context.posts;
  });

  const focusPost = useContextSelector(GithubContext, (context) => {
    return context.focusPost;
  });

  const postsCount = posts?.length;

  const handleRedirectDetailsPost = (postId: number) => {
    focusPost(postId);

    navigate("/post");
  };

  return (
    <Container>
      <LabelsContainer>
        <PostHeader>
          <header>Publicações</header>

          <Selector />
        </PostHeader>
        <span>{postsCount} publicações</span>
      </LabelsContainer>

      <SearchForm />

      <PostsList>
        {posts?.map((post) => (
          <Post
            key={post.id}
            createdAt={formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
            tile={post.title}
            description={post.body}
            onClick={() => handleRedirectDetailsPost(post.id)}
          />
        ))}
      </PostsList>
    </Container>
  );
};

export default Posts;
