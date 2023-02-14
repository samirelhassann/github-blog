import React from "react";

import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Select from "@radix-ui/react-select";
import { useContextSelector } from "use-context-selector";

import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectViewPort,
} from "./Selector.styles";

import { GithubContext } from "../../../../contexts/GithubContext";

const Selector = () => {
  const userRepos = useContextSelector(GithubContext, (context) => {
    return context.userRepos;
  });

  const focusRepo = useContextSelector(GithubContext, (context) => {
    return context.focusRepo;
  });

  const handleClickProject = (repoName: string) => {
    focusRepo(repoName);
  };

  const focusedRepo = useContextSelector(GithubContext, (context) => {
    return context.focusedRepo;
  });

  const renderSelectItem = (repoName: string) => {
    return (
      <SelectItem value={repoName} key={repoName}>
        <Select.ItemText>{repoName}</Select.ItemText>
        <SelectItemIndicator>
          <FontAwesomeIcon icon={faCheck} />
        </SelectItemIndicator>
      </SelectItem>
    );
  };

  return (
    <Select.Root value={focusedRepo?.name} onValueChange={handleClickProject}>
      <SelectTrigger aria-label="Projects">
        <Select.Value placeholder="Select a project…" />
        <Select.Icon>
          <FontAwesomeIcon icon={faChevronDown} />
        </Select.Icon>
      </SelectTrigger>

      <Select.Portal>
        <SelectContent>
          <SelectViewPort>
            {userRepos?.map((repo) => renderSelectItem(repo.name))}
          </SelectViewPort>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  );
};

export default Selector;
