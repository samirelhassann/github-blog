import React, { useEffect, useState } from "react";

import { useContextSelector } from "use-context-selector";

import { ContentSearch } from "./SearchForm.styles";

import { GithubContext } from "../../../../contexts/GithubContext";

const SearchForm = () => {
  const fetchGitPosts = useContextSelector(GithubContext, (context) => {
    return context.fetchGitPosts;
  });

  const user = useContextSelector(GithubContext, (context) => {
    return context.user;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (user) fetchGitPosts(searchTerm || "");
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, user, fetchGitPosts]);

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <ContentSearch
      type="text"
      placeholder="Buscar conteúdo"
      onChange={handleOnChangeSearch}
    />
  );
};

export default SearchForm;
