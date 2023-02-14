import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useContextSelector } from "use-context-selector";
import * as z from "zod";

import { Content, InfoError, Overlay } from "./GitLoginModal.styles";

import { GithubContext } from "../../../../contexts/GithubContext";

const gitLoginSchema = z.object({
  login: z.string(),
});

type GitLoginFormInput = z.infer<typeof gitLoginSchema>;

const GitLoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<GitLoginFormInput>({
    resolver: zodResolver(gitLoginSchema),
  });

  const fetchGitUser = useContextSelector(GithubContext, (context) => {
    return context.fetchGitUser;
  });

  const [errorMessage, setErrorMessage] = useState<string | null>();

  const handleSubmitNewTransaction = async (data: GitLoginFormInput) => {
    setErrorMessage(null);

    const responseReturn = await fetchGitUser(data.login);

    if (responseReturn) {
      setErrorMessage(responseReturn);
    }
  };

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Git User Login</Dialog.Title>

        <form action="" onSubmit={handleSubmit(handleSubmitNewTransaction)}>
          {errorMessage && (
            <InfoError>
              <FontAwesomeIcon icon={faCircleInfo} /> {errorMessage}
            </InfoError>
          )}
          <input
            type="text"
            placeholder="Inform here your Github username"
            required
            {...register("login", { required: true })}
          />

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};

export default GitLoginModal;
