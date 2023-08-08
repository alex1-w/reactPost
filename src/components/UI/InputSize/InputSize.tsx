import styles from './InputSize.module.scss'
import { TextField } from '@mui/material'
import { FC } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';

interface IInputSize {
    unit: "кг" | "см";
    name: string;
    // label?: string;
    size: "small" | "medium";
    // type: "number" | "text" | "password";
    register: UseFormRegister<any>;
    errors: string | undefined;
    rules: RegisterOptions;
}

export const InputSize: FC<IInputSize> = ({ errors, name, register, rules, size, unit }) => {
    return (
        <div className={styles.main}>

            <div className={styles.wrapper}>
                <TextField
                    size={size}
                    className={styles.main__inp}
                    type='number'
                    {...(register && register(name, { ...rules }))}
                />
                <p className={styles.main__unit}>{unit}</p>
            </div>

            <AnimatePresence>
                {errors && (
                    <motion.p
                        className={styles.main__error}
                        initial={{ height: 0, y: "-100", opacity: 0 }}
                        animate={{ height: "auto", y: 0, opacity: 1 }}
                        exit={{ height: 0, y: "-100", opacity: 0 }}
                    >
                        {errors}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}