import styles from "./StepFour.module.scss";
import { Button, Container } from "@mui/material";
import { Navigation } from "../../components/Navigation/Navigation";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IStepFour } from "../../types/StepsInterfaces";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";

export const StepFour = () => {
  const {
    register,
    formState: { errors, submitCount, isValid },
    handleSubmit,
  } = useForm<IStepFour>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const error: SubmitErrorHandler<IStepFour> = (data) => {
    console.log("error", data);
  };

  const submit: SubmitHandler<IStepFour> = (data) => {
    console.log("error", data);
  };

  return (
    <Container>
      <form className={styles.formBlock} onSubmit={handleSubmit(submit, error)}>
        <Navigation />

        <div className={styles.inputsBlock}>
          <InputBlock
            errors={errors}
            name="cardNumber"
            register={register}
            size="medium"
            type="number"
            label="0000 0000 0000 0000"
            rules={{
              required: { value: true, message: "поле обязательно" },
              minLength: { value: 16, message: "минимальное количество - 16" },
              maxLength: { value: 20, message: "максимальное количество 20" },
            }}
          />
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
