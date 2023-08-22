import styles from "./StepFive.module.scss";
import { useState } from "react";
import { Container } from "../../components/Container/Container";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IStepFive } from "../../types/StepsInterfaces";
import { Form } from "../../components/Form/Form";
import { IconContainer, StyledRating, customIcons } from "./iconsArr";
import { scoreIcon } from "../../data/icontsSvg";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";
import { useData } from "../../providers/DataContext";
import useWindowSize from "react-use/lib/useWindowSize";
import { useOrderContext } from "../../providers/OrdersContext";
import { useAccessProvider } from "../../providers/AccessProvider";

export const StepFive = () => {

  const { data: newPackage, setDataValues } = useData();
  const { access, setAccess } = useAccessProvider()

  const { addOrders } = useOrderContext()
  const [rating, setRating] = useState<any>();

  // const { width, height } = useWindowSize();
  const congratulation = () => {
    // return setTimeout(() => {
    //   console.log(3232);
    //   <Confetti width={width} height={height} />;
    // }, 10);
    // return <Confetti width={width} height={height} />
  };

  const { register, handleSubmit, formState: { isValid, submitCount, errors } } = useForm(
    {
      mode: "onBlur",
      reValidateMode: "onSubmit",
      defaultValues: {
        comment: "",
      },
    });

  const error: SubmitErrorHandler<IStepFive> = (data) => console.log("error", data);

  const submit: SubmitHandler<IStepFive> = (data) => {

    setDataValues({
      ...newPackage,
      stepFive: {
        comment: data.comment,
        rating: rating,
      }
    });

    addOrders(newPackage)
    setAccess({ ...access, accessStepFive: true })
  };


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
                value: 1,
                message: "минимальная длина - 30 символов",
              },
              maxLength: {
                value: 100,
                message: "максимальное значение - 100 символов",
              },
            }}
            size="medium"
            type="text"
            label="комментарий к заказу"
            multiline={{ multilineValue: true, rows: 4 }}
          />
          <div>
            <StyledRating
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
