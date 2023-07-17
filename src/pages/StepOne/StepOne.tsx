import styles from "./StepOne.module.scss";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { Button, Typography } from "@mui/material";
import { useData } from "../../providers/DataContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";
import { IStepOne } from "../../types/StepsInterfaces";

export const StepOne = () => {
  const { setDataValues, data } = useData();
  const navigation = useNavigate();

  const fieldNameCheck = (field: string) => {
    return Boolean(field.match(/[a-z]/i)) || "только латиница";
  };

  const rulesForNameInput = {
    validate: fieldNameCheck,
    minLength: 2,
    required: {
      value: true,
      message: "поле не заполнено",
    },
  };

  const rulesForTelInput = {
    minLength: { value: 11, message: "введите корректный номер" },
    required: {
      value: true,
      message: "поле не заполнено",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, submitCount },
  } = useForm<IStepOne>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      firstNameSenders: "",
      lastNameSenders: "",
      phoneNumberSenders: "",
      firstNameReceiver: "",
      lastNameReceiver: "",
      phoneNumberReceiver: "",
    },
  });

  const error: SubmitErrorHandler<IStepOne> = (data) => {
    console.log("error", data);
  };
  const submit: SubmitHandler<IStepOne> = (data) => {
    console.log("submit", data.firstNameReceiver);

    setDataValues({
      // fromWhom: { person: { firsName: data.firstNameSenders, lastName: data.lastNameSenders } },
      // toWhom: { person: { firsName: data.firstNameReceiver, lastName: data.lastNameReceiver } }
      // fromWhom: { person: { firsName: data.firstNameSenders, lastName: data.lastNameSenders } },
      // toWhom: { person: { firsName: data.firstNameReceiver, lastName: data.lastNameReceiver } }
    });
    return navigation("/step-two");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submit, error)}
        className={styles.formBlock}
        noValidate
      >
        <Navigation />

        <div className={styles.formBlock__item}>
          <h3>От кого</h3>

          <InputBlock
            errors={errors}
            name="firstNameSenders"
            register={register}
            rules={rulesForNameInput}
            size="medium"
            type="text"
            label="Имя отправителя"
          />
          <InputBlock
            errors={errors}
            name="lastNameSenders"
            register={register}
            rules={rulesForNameInput}
            size="medium"
            type="text"
            label="Имя отправителя"
          />
          <InputBlock
            errors={errors}
            name="phoneNumberSenders"
            register={register}
            rules={rulesForTelInput}
            size="medium"
            type="number"
            label="тел. номер отправителя"
          />
        </div>

        <div className={styles.formBlock__item}>
          <h3>Кому</h3>

          <InputBlock
            errors={errors}
            name="firstNameReceiver"
            register={register}
            rules={rulesForNameInput}
            size="medium"
            type="text"
            label="Имя получателя"
          />

          <InputBlock
            errors={errors}
            name="lastNameReceiver"
            register={register}
            rules={rulesForNameInput}
            size="medium"
            type="text"
            label="Фамилия получателя"
          />
          <InputBlock
            errors={errors}
            name="phoneNumberReceiver"
            register={register}
            rules={rulesForTelInput}
            size="medium"
            type="number"
            label="тел. номер отправителя"
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
    </>
  );
};
