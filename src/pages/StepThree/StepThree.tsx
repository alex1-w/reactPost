import styles from "./StepThree.module.scss";
import { Button } from "@mui/material";
import { Container } from "../../components/Container/Container";
import { Navigation } from "../../components/Navigation/Navigation";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IStepThree } from "../../types/StepsInterfaces";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";
import { useNavigate } from "react-router-dom";
import { coinIcon, packageIcon } from "../../data/icontsSvg";
import { Form } from "../../components/Form/Form";

export const StepThree = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { isValid, submitCount, errors },
  } = useForm<IStepThree>({ mode: "onBlur", reValidateMode: "onChange" });

  const error: SubmitErrorHandler<IStepThree> = (data) => {
    console.log("error", data);
  };

  const submit: SubmitHandler<IStepThree> = (data) => {
    console.log("error", data);

    return navigate("/step-four");
  };

  return (
    <Container>
      <Form
        error={error}
        submit={submit}
        submitCount={submitCount}
        handleSubmit={handleSubmit}
        isValid={isValid}
        head={{ title: "Габариты коробки", icon: packageIcon }}
      > 
        <div className={styles.inputsBlock}>
          <InputBlock
            errors={errors}
            name="weight"
            register={register}
            rules={{
              required: { value: true, message: "required" },
              max: { value: 30, message: "максимум 30 кг" },
            }}
            size="small"
            type="number"
            sizeStyle={"кг"}
          />
          <InputBlock
            errors={errors}
            name="width"
            register={register}
            rules={{
              required: { value: true, message: "required" },
              max: { value: 100, message: "максимум 100см" },
            }}
            size="small"
            type="number"
            sizeStyle={"см"}
          />
          <InputBlock
            errors={errors}
            name="height"
            register={register}
            rules={{
              required: { value: true, message: "required" },
              max: { value: 100, message: "максимум 100см" },
            }}
            size="small"
            type="number"
            sizeStyle={"см"}
          />
          <InputBlock
            errors={errors}
            name="lenth"
            register={register}
            rules={{
              required: { value: true, message: "required" },
              max: { value: 100, message: "максимум 100см" },
            }}
            size="small"
            type="number"
            sizeStyle={"см"}
          />
        </div>
      </Form>
    </Container>
  );
};
