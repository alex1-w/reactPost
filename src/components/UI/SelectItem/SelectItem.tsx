import styles from "./SelectItem.module.scss";
import { FC } from "react";
import {
  Controller,
  RegisterOptions,
  SubmitHandler,
  useForm,
  Control,
  FieldErrors,
} from "react-hook-form";
import ReactSelect from "react-select";
import { IOption } from "../../../types/data.inrterface";
import { AnimatePresence, motion } from "framer-motion";

interface ISelectProps {
  //   control: Control;
  control: any;
  //   register?: UseFormRegister<>;
  register?: any;
  name: string;
  rules: RegisterOptions;
  //   errors?: FieldErrors;
  errors?: any;
  placeholder: string;
  options: any[];
}

export const SelectItem: FC<ISelectProps> = ({
  control,
  register,
  name,
  rules,
  errors,
  placeholder,
  options,
}) => {
  const getValue = (value: string) =>
    value ? options.find((option) => option.value === value) : "";

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { name, value, onChange }, fieldState: { error } }) => (
        <div className={styles.main}>
          <ReactSelect
            onChange={(newValue) => {
              onChange((newValue as IOption).value);
            }}
            value={getValue(value)}
            options={options}
            placeholder={placeholder}
          />

          <AnimatePresence>
            {errors[name] && (
              <motion.p
                initial={{ opacity: 0, y: "-100", height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ height: 0, y: "-100", opacity:0 }}
              >
                {errors[name]?.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      )}
    />
  );
};
