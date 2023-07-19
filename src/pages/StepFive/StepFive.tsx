import styles from "./StepFive.module.scss";
import { Container } from "../../components/Container/Container";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IStepFive } from "../../types/StepsInterfaces";
import { Form } from "../../components/Form/Form";
import { scoreIcon } from "../../data/icontsSvg";
 
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { useState } from "react";

export const StepFive = () => {
  const [rating, setRating] = useState<number | null>(5);
  console.log(rating);

  const {
    register,
    handleSubmit,
    formState: { isValid, submitCount },
  } = useForm();
  const error: SubmitErrorHandler<IStepFive> = (data) => {
    console.log("error", data);
  };

  const submit: SubmitHandler<IStepFive> = (data) => {
    console.log("error", data);
  };
  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));

  const customIcons: {
    [index: string]: {
      icon: React.ReactElement;
      label: string;
    };
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: "Very Satisfied",
    },
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
        <div>
          <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
          />
        </div>
      </Form>
    </Container>
  );
};
