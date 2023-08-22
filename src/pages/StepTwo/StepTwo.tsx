import styles from "./StepTwo.module.scss";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Container } from "../../components/Container/Container";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { SelectItem } from "../../components/UI/SelectItem/SelectItem";
import { RadioBlock } from "../../components/UI/RadioBlock/RadioBlock";
import { insuranceTypes, options } from "../../data/data";
import { AnimatePresence, motion } from "framer-motion";
import { IStepTwo } from "../../types/StepsInterfaces";
import { Form } from "../../components/Form/Form";
import { worldIcon } from "../../data/icontsSvg";
import { useData } from "../../providers/DataContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAccessProvider } from "../../providers/AccessProvider";

export const StepTwo = () => {
  const { setDataValues, data: newPackage } = useData();
  const { access, setAccess } = useAccessProvider()
  const navigation = useNavigate();


  useEffect(() => {
    if (!access.accessStepTwo) {
      navigation(-1)
    }
  }, [access])


  const { register, handleSubmit, control, formState: { errors, isValid, submitCount }, watch, } = useForm<IStepTwo>(
    {
      mode: "onBlur",
      defaultValues: {
        sendersCountry: "",
        receiverCountry: "",
        insurance: false,
        insuranceType: "",
      },
    });

  const isInsurance = watch("insurance");

  const error: SubmitErrorHandler<IStepTwo> = (errors) => { };

  const submit: SubmitHandler<IStepTwo> = (data) => {
    setDataValues({
      ...newPackage,
      stepTwo: {
        sendersCountry: data.sendersCountry,
        receiverCountry: data.receiverCountry,
        insurance: data.insurance,
        insuranceType: data.insuranceType
      }
    });

    setAccess({ ...access, accessStepThree: true })
    // console.log(access);

    return navigation("/step-three");
  };

  return (
    <>
      <Container>
        <Form
          error={error}
          handleSubmit={handleSubmit}
          isValid={isValid}
          submit={submit}
          submitCount={submitCount}
          head={{
            title: "Путь",
            icon: worldIcon,
          }}
        >
          <div className={styles.mainContent}>

            <SelectItem
              control={control}
              errors={errors}
              name="sendersCountry"
              rules={{ required: { message: "поле обязательно", value: true } }}
              placeholder="страна отправителя"
              options={options}
            />

            <SelectItem
              control={control}
              errors={errors}
              name="receiverCountry"
              rules={{ required: { message: "поле обязательно", value: true } }}
              placeholder="страна отправителя"
              options={options}
            />

            <div className={styles.insuranceBlock}>
              <FormControlLabel
                className={styles.insuranceBlock__checkBox}
                label="Страховка"
                control={
                  <Checkbox {...register("insurance")} name="insurance" />
                }
              />

              <AnimatePresence>
                {isInsurance && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                  >
                    <RadioBlock
                      control={control}
                      // register={register}
                      name="insuranceType"
                      label="расценки"
                      values={insuranceTypes}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};
