import styles from "./Form.module.scss";
import { SubmitErrorHandler, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import React, { FC } from "react";
import { Button } from "@mui/material";
import { Navigation } from "../Navigation/Navigation";

interface IFormProps {
  children: React.ReactNode;
  head?: { title: string; icon: React.ReactNode };
  handleSubmit: UseFormHandleSubmit<any>;
  submit: SubmitHandler<any>;
  error: SubmitErrorHandler<any>;
  isValid: boolean;
  submitCount: number;
}

export const Form: FC<IFormProps> = ({ children, head, handleSubmit, isValid, submitCount, error, submit, }) => {


  return (
    <form
      noValidate
      className={styles.main}
      onSubmit={handleSubmit(submit, error)}
    >
      <Navigation />
      {head && (
        <div className={styles.title}>
          <h1> {head?.title}</h1>
          {head?.icon}
        </div>
      )}
      {children}
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        disabled={submitCount !== 0 && !isValid}
      >
        Далее
      </Button>
    </form>
  );
};
