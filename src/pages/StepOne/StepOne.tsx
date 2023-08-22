import styles from "./StepOne.module.scss";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { Button, Typography } from "@mui/material";
import { useData } from "../../providers/DataContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";
import { IStepOne } from "../../types/StepsInterfaces";
import { Form } from "../../components/Form/Form";
import { worldIcon } from "../../data/icontsSvg";
import { useAccessProvider } from "../../providers/AccessProvider";

export const StepOne = () => {
  const { setDataValues, data: newPackage } = useData();
  const { access, setAccess } = useAccessProvider()

  const navigation = useNavigate();

  const fieldNameCheck = (field: string) => Boolean(field.match(/[a-z]/i)) || "только латиница"

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

  const { register, handleSubmit, formState: { errors, isValid, submitCount } } = useForm<IStepOne>(
    {
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: {
        firstNameSenders: "dddddd",
        lastNameSenders: "dddddd",
        phoneNumberSenders: '333333333333',
        firstNameReceiver: "fffff",
        lastNameReceiver: "ffffff",
        phoneNumberReceiver: '33333333333',
      },
    });

  const error: SubmitErrorHandler<IStepOne> = (data) => console.log("error", data)

  const submit: SubmitHandler<IStepOne> = (data) => {

    setDataValues(
      {
        ...newPackage,
        stepOne: {
          firstNameReceiver: data.firstNameReceiver,
          lastNameReceiver: data.lastNameReceiver,
          firstNameSenders: data.firstNameSenders,
          lastNameSenders: data.lastNameSenders,
          phoneNumberReceiver: data.phoneNumberReceiver,
          phoneNumberSenders: data.phoneNumberSenders,
        }
      }
    );

    setAccess({ ...access, accessStepTwo: true })

    return navigation("/step-two");
  };


  return (
    <>
      <Form
        error={error}
        submit={submit}
        handleSubmit={handleSubmit}
        isValid={isValid}
        submitCount={submitCount}
      >
        <div className={styles.main}>
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

        <div className={styles.main}>
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
      </Form>
    </>
  );
};
