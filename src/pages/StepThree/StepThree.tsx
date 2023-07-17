import { Button } from "@mui/material";
import { Container } from "../../components/Container/Container";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./StepThree.module.scss";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IStepThree } from "../../types/StepsInterfaces";

export const StepThree = () => {
  const {
    handleSubmit,
    register,
    formState: { isValid, submitCount },
  } = useForm<IStepThree>();

  const error: SubmitErrorHandler<IStepThree> = (data) => {
    console.log("error", data);
  };

  const submit: SubmitHandler<IStepThree> = (data) => {
    console.log("error", data);
  };

  return (
    <Container>
      <form className={styles.formBlock} onSubmit={handleSubmit(submit, error)}>
        <Navigation />

        <div className="">



          
        </div>

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
    </Container>
  );
};
