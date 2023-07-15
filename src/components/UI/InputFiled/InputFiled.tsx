import styles from './InputFiled.module.scss'
import { FC, InputHTMLAttributes } from 'react'
import { TextField } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'

interface IAuthForm {
    login: string
    password: string
    repeatPassword: string
}

interface IInputprops extends InputHTMLAttributes<HTMLInputElement> {
    name: 'login' | 'password' | 'repeatPassword'
    label?: string
    type: string
    register: UseFormRegister<IAuthForm>
    errors: any
}

export const InputFiled: FC<IInputprops> = ({ label, name, type, register, errors, ...rest }: IInputprops) => {
    return (
        <div className={styles.main}>
            {/* <label htmlFor={name}>{label}</label> */}
            <input
                placeholder=''
                type={type}
                {...rest}
                {...register(name, {
                    required: 'обязательное поле',
                    pattern: {
                        value: /^[a-z0-9_-]{3,16}$/,
                        message: 'enter valid username'
                    }
                })}
            />

            {errors?.name && <p>{errors.name.message}</p>}

        </div>
    )
}