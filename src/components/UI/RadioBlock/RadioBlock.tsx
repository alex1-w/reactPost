import styles from "./RadioBlock.module.scss";
import { FC } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface IRadioBlockProps {
  label: string;
  values: any[];
  register?: any;
  name: string;
}

export const RadioBlock: FC<IRadioBlockProps> = ({
  label,
  values,
  register,
  name,
}) => {
  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>

        <RadioGroup row className={styles.main}>
          {values.map((item) => (
            <div className={styles.radioBlock}>
              <FormControlLabel
                {...(register && register(name))}
                control={<Radio name={item.name} />}
                // value={item.name}
                // value={}
                label={item.label}
                color="primary"
                className={styles.radioGroup}
              />
              <span>{item.price}р</span>
            </div>
          ))}
        </RadioGroup>
      </FormControl>

      {/* <div>
        {values.map((item) => (
          <>
            <input
              type="radio"
              id={item.name}
              name={item.label}
              value={item.name}
            />
            <label htmlFor={item.name}>{item.name}</label>
          </>
        ))}
      </div> */}
    </>
  );
};
