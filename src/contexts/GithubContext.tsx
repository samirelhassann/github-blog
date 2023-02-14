import { ReactNode, useCallback, useMemo, useState } from "react";

import { createContext } from "use-context-selector";

import {
  GithubPost,
  GithubPostsResponse,
  GithubUser,
  GitRepo,
} from "../interfaces/Github";
import { api } from "../lib/axios";

interface GithubContextType {
  user?: GithubUser;
  posts?: GithubPost[];
  userRepos?: GitRepo[];
  focusedRepo?: GitRepo;
  focusedPost?: GithubPost;
  fetchGitUser: (userName: string) => Promise<string | void>;
  fetchGitUserRepos: () => Promise<void>;
  fetchGitPosts: (repo: string, query?: string) => Promise<void>;
  focusPost: (postId: number) => void;
  focusRepo: (repoName: string) => void;
}

interface GithubProviderProps {
  children: ReactNode;
}

export const GithubContext = createContext<GithubContextType>(
  {} as GithubContextType
);

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<GithubUser>();
  const [userRepos, setUserRepos] = useState<GitRepo[]>();
  const [posts, setPosts] = useState<GithubPost[]>([]);
  const [focusedPost, setFocusedPost] = useState<GithubPost>();
  const [focusedRepo, setFocusedRepo] = useState<GitRepo>();

  const fetchGitUser = useCallback(async (userName: string) => {
    try {
      const response = await api.get(`/users/${userName}`);

      setUser(response.data);
    } catch (e) {
      return "User not found";
    }
  }, []);

  const fetchGitPosts = useCallback(
    async (query?: string) => {
      if (focusedRepo) {
        const response = await api.get<GithubPostsResponse>(
          `/search/issues?q=${query || ""}repo:${user?.login}/${
            focusedRepo.name
          }`
        );

        setPosts(response.data.items);
      }
    },
    [user, focusedRepo]
  );

  const fetchGitUserRepos = useCallback(async () => {
    const response = await api.get<GitRepo[]>(`/users/${user?.login}/repos`);

    setUserRepos(response.data);
  }, [user]);

  const focusPost = useCallback(
    (postId: number) => {
      const filteredPost = posts.find((post) => post.id === postId);

      setFocusedPost(filteredPost);
    },
    [posts]
  );

  const focusRepo = useCallback(
    (repoName: string) => {
      const filteredRepo = userRepos?.find((repo) => repo.name === repoName);

      setFocusedRepo(filteredRepo);
    },
    [userRepos]
  );

  const contextReturn = useMemo(() => {
    return {
      user,
      posts,
      focusedPost,
      userRepos,
      focusedRepo,
      fetchGitUser,
      fetchGitPosts,
      focusPost,
      fetchGitUserRepos,
      focusRepo,
    };
  }, [
    user,
    posts,
    focusedPost,
    userRepos,
    focusedRepo,
    fetchGitUser,
    fetchGitPosts,
    focusPost,
    fetchGitUserRepos,
    focusRepo,
  ]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <GithubContext.Provider value={contextReturn}>
      {children}
    </GithubContext.Provider>
  );
}
