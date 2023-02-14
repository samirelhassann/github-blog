import React, { useEffect } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { useContextSelector } from "use-context-selector";

import { Container } from "./Home.styles";

import MainContent from "../../components/MainContent/MainContent";
import GitLoginModal from "./components/GitLoginModal/GitLoginModal";
import Posts from "./components/Posts/Posts";
import ProfileCard from "./components/ProfileCard/ProfileCard";

import { GithubContext } from "../../contexts/GithubContext";

const Home = () => {
  const user = useContextSelector(GithubContext, (context) => {
    return context.user;
  });

  const fetchGitUserRepos = useContextSelector(GithubContext, (context) => {
    return context.fetchGitUserRepos;
  });

  useEffect(() => {
    if (user) {
      fetchGitUserRepos();
    }
  }, [user]);

  return (
    <MainContent>
      <Dialog.Root open={!user}>
        <GitLoginModal />
      </Dialog.Root>
      <Container>
        {user ? (
          <ProfileCard
            img={user.avatar_url}
            name={user.name}
            description={user.bio}
            companyName={user.company}
            gitName={user.login}
            followers={user.followers}
            githubLink={user.html_url}
          />
        ) : (
          <ProfileCard isLoading />
        )}

        <Posts />
      </Container>
    </MainContent>
  );
};
export default Home;
