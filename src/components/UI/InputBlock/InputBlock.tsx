import styles from "./InputBlock.module.scss";
import { TextField } from "@mui/material";
import { FC } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

interface IInputBlock {
  // sizeStyle?: { unit: "кг" | "см"  };
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
    <div className={styles.sizingBlock}>
      <div
        className={cn(styles.main, {
          [styles.sizeStyle]: sizeStyle === "кг" || sizeStyle === "см",
        })}
      >
        <TextField
          type={type}
          size={size}
          className={styles.inp}
          label={label}
          {...(register && register(name, { ...rules }))}
        />

        <AnimatePresence>
          {errors[name] && (
            <motion.p
              initial={{ height: 0, y: "-100" }}
              animate={{ height: "auto", y: 0 }}
              exit={{ height: 0, y: "-100" }}
            >
              {errors[name].message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      {sizeStyle && <p className={styles.sizingBlock__unit}>{sizeStyle}</p>}
    </div>
  );
};
