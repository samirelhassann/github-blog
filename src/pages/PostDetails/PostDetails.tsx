/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import ReactMarkdown from "react-markdown";

import { useContextSelector } from "use-context-selector";

import { Container, MarkdownContainer } from "./PostDetails.styles";

import MainContent from "../../components/MainContent/MainContent";
import PostSummaryCard from "./components/PostSummaryCard/PostSummaryCard";

import { GithubContext } from "../../contexts/GithubContext";

const PostDetails = () => {
  const focusedPost = useContextSelector(GithubContext, (context) => {
    return context.focusedPost;
  });

  return (
    <MainContent>
      {focusedPost && (
        <>
          <Container>
            <PostSummaryCard
              commentsQuantity={focusedPost.comments}
              title={focusedPost.title}
              createdAt={new Date(focusedPost.created_at)}
              userName={focusedPost.user.login}
              gitLink={focusedPost.html_url}
            />
          </Container>
          <MarkdownContainer
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            <ReactMarkdown>{focusedPost.body}</ReactMarkdown>
          </MarkdownContainer>
        </>
      )}
    </MainContent>
  );
};

export default PostDetails;
