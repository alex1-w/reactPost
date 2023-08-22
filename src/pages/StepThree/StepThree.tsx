import styles from "./StepThree.module.scss";
import { Container } from "../../components/Container/Container";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IStepThree } from "../../types/StepsInterfaces";
import { useNavigate } from "react-router-dom";
import { packageIcon } from "../../data/icontsSvg";
import { Form } from "../../components/Form/Form";
import { useData } from "../../providers/DataContext";
import { InputSize } from "../../components/UI/InputSize/InputSize";
import { useAccessProvider } from "../../providers/AccessProvider";
import { useEffect } from "react";

export const StepThree = () => {
  const { data: newPackage, setDataValues } = useData();
  const { access, setAccess } = useAccessProvider()

  const navigate = useNavigate();

  useEffect(() => {
    if (!access.accessStepThree) {
      navigate(-1)
    }
  }, [access])

  const { handleSubmit, register, formState: { isValid, submitCount, errors }, } = useForm<IStepThree>(
    {
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: {
        height: 11,
        length: 11,
        // packageType: 'paperboard',
        weight: 11,
        width: 11,
      }
    });

  const error: SubmitErrorHandler<IStepThree> = (data) => console.log("error", data);

  const submit: SubmitHandler<IStepThree> = (data) => {
    setDataValues({
      ...newPackage,
      stepThree: {
        weight: data.weight,
        height: data.height,
        width: data.width,
        length: data.length,
        packageType: data.packageType
      }

    });
    // console.log(newPackage);
    setAccess({ ...access, accessStepFour: true })
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
        head={{ title: "Габариты посылки", icon: packageIcon }}
      >
        <div className={styles.inputsBlock}>

          <InputSize
            errors={errors?.weight?.message}
            name="weight"
            register={register}
            size="small"
            unit="кг"
            rules={{
              required: { value: true, message: "required" },
              max: { value: 30, message: "максимум 30 кг" }
            }}
          />

          <InputSize
            errors={errors?.width?.message}
            name="width"
            register={register}
            size="small"
            unit="см"
            rules={{
              required: { value: true, message: "required" },
              max: { value: 100, message: "максимум 100см" },
            }}
          />

          <InputSize
            errors={errors?.height?.message}
            name="height"
            register={register}
            size="small"
            unit="см"
            rules={{
              required: { value: true, message: "required" },
              max: { value: 100, message: "максимум 100см" },
            }}
          />

          <InputSize
            errors={errors?.length?.message}
            name="length"
            register={register}
            size="small"
            unit="см"
            rules={{
              required: { value: true, message: "required" },
              max: { value: 100, message: "максимум 100см" },
            }}
          />

        </div>
      </Form>
    </Container>
  );
};
