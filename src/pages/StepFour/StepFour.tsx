import styles from "./StepFour.module.scss";
import { Button, Container } from "@mui/material";
import { Navigation } from "../../components/Navigation/Navigation";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IStepFour } from "../../types/StepsInterfaces";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";
import { useNavigate } from "react-router-dom";
import { coinIcon } from "../../data/icontsSvg";
import { Form } from "../../components/Form/Form";
import { useData } from "../../providers/DataContext";
import { useAccessProvider } from "../../providers/AccessProvider";
import { useEffect } from "react";

export const StepFour = () => {
  const navigate = useNavigate();
  const { access, setAccess } = useAccessProvider()

  useEffect(() => {
    if (!access.accessStepFour) {
      navigate(-1)
    }
  }, [access])


  const { data: newPackage, setDataValues } = useData();

  const { register, formState: { errors, submitCount, isValid }, handleSubmit } = useForm<IStepFour>(
    {
      mode: "onBlur",
      reValidateMode: "onChange"
    });

  const error: SubmitErrorHandler<IStepFour> = (data) => console.log("error", data);

  const submit: SubmitHandler<IStepFour> = (data) => {

    setDataValues({
      ...newPackage,
      stepFour: {
        cardNumber: data.cardNumber,
        passport: data.passport,
      }
    });
    setAccess({ ...access, accessStepFive: true })

    return navigate("/step-five");
  };

  return (
    <Container>
      <Form
        error={error}
        handleSubmit={handleSubmit}
        isValid={isValid}
        submit={submit}
        submitCount={submitCount}
        head={{ title: "Оплата", icon: coinIcon }}
      >
        <div className={styles.inputsBlock}>
          <InputBlock
            error={errors.cardNumber?.message}
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
      </Form>
    </Container>
  );
};
