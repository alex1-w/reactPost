import styles from "./InputBlock.module.scss";
import { TextField } from "@mui/material";
import { FC } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

interface IInputBlock {
  sizeStyle?: "кг" | "см";
  name: string;
  label?: string;
  size: "small" | "medium";
  type: "number" | "text" | "password";
  register: UseFormRegister<any>;
  errors: any;
  rules: RegisterOptions;
}

export const InputBlock: FC<IInputBlock> = ({
  errors,
  name,
  register,
  rules,
  size,
  type,
  label,
  sizeStyle,
}) => {
  return (
    <div
      className={cn(styles.main, {
        [styles.sizeStyles]: sizeStyle === "кг" || sizeStyle === "см",
      })}
    >
      <div
        className={cn({
          [styles.wrapper]: sizeStyle === "кг" || sizeStyle === "см",
        })}
      >
        <TextField
          type={type}
          size={size}
          className={styles.main__inp}
          label={label}
          {...(register && register(name, { ...rules }))}
        />
        {sizeStyle && <p className={styles.sizeStyle__unit}>{sizeStyle}</p>}
      </div>

      <AnimatePresence>
        {errors[name] && (
          <motion.p
            className={styles.main__error}
            initial={{ height: 0, y: "-100", opacity: 0 }}
            animate={{ height: "auto", y: 0, opacity: 1 }}
            exit={{ height: 0, y: "-100", opacity: 0 }}
          >
            {errors[name].message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
