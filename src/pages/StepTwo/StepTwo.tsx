import styles from "./StepTwo.module.scss";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { Container } from "../../components/Container/Container";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Navigation } from "../../components/Navigation/Navigation";
import { SelectItem } from "../../components/UI/SelectItem/SelectItem";
import { RadioBlock } from "../../components/UI/RadioBlock/RadioBlock";
import { insuranceTypes, options } from "../../data/data";
import { AnimatePresence, motion } from "framer-motion";

interface IStepTwo {
  sendersCountry: string;
  receiverCountry: string;
  insurance: boolean;
  insuranceType?: "simple" | "standart" | "pro" | "";
}
const getValue = (value: string) =>
  value ? options.find((option) => option.value === value) : "";

export const StepTwo = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, submitCount },
    watch,
  } = useForm<IStepTwo>({
    mode: "onBlur",
    defaultValues: {
      sendersCountry: "",
      receiverCountry: "",
      insurance: false,
      insuranceType: "",
    },
  });
  const isInsurance = watch("insurance");

  const error: SubmitErrorHandler<IStepTwo> = (errors) => {
    console.log("errors", errors);
  };
  const submit: SubmitHandler<IStepTwo> = (data) => {
    console.log("submit", data);
  };

  return (
    <>
      <Container>
        <form
          className={styles.formBlock}
          onSubmit={handleSubmit(submit, error)}
        >
          <Navigation />

          <div className={styles.formBlock__content}>
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
                className={styles.checkBox}
                label="сложная посылка"
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
                      register={register}
                      name="insuranceType"
                      label="расценки"
                      values={insuranceTypes}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
    </>
  );
};
