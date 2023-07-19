import styles from "./StepFive.module.scss";
import { useState } from "react";
import { Container } from "../../components/Container/Container";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IStepFive } from "../../types/StepsInterfaces";
import { Form } from "../../components/Form/Form";
import { StyledRating, customIcons } from "./iconsArr";
import { IconContainerProps, TextField } from "@mui/material";
import { scoreIcon } from "../../data/icontsSvg";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";

export const StepFive = () => {
  const [rating, setRating] = useState<number | null>(5);
  console.log(rating);

  const {
    register,
    handleSubmit,
    formState: { isValid, submitCount, errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });
  const error: SubmitErrorHandler<IStepFive> = (data) => {
    console.log("error", data);
  };

  const submit: SubmitHandler<IStepFive> = (data) => {
    console.log("error", data);
  };

  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  return (
    <Container>
      <Form
        error={error}
        handleSubmit={handleSubmit}
        isValid={isValid}
        submit={submit}
        submitCount={submitCount}
        head={{ title: "Отзыв", icon: scoreIcon }}
      >
        <div className={styles.main}>
          <InputBlock
            errors={errors}
            name="comment"
            register={register}
            rules={{
              minLength: {
                value: 30,
                message: "минимальная длина - 30 символов",
              },
              maxLength: {
                value: 100,
                message: "максимальное значение - 100 символов",
              },
            }}
            size="medium"
            type="text"
            label="коммент"
            multiline={{ multilineValue: true, rows: 4 }}
          />
          <div>
            <StyledRating
              // {...register("rating")}
              // name="highlight-selected-only"
              // defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
              value={rating}
              onChange={(event, newRating) => {
                setRating(newRating);
              }}
            />
          </div>
        </div>
      </Form>
    </Container>
  );
};
