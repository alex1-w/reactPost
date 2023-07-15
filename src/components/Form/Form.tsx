import { SubmitHandler } from 'react-hook-form'
import styles from './Form.module.scss'
import React, { FC } from "react"

interface IFormProps {
    children: React.ReactNode,
    title: string
    handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
    // onSubmit: () => SubmitHandler
}

export const Form: FC<IFormProps> = ({ children, title, handleSubmit, ...rest }) => {

    return (
        <form noValidate className={styles.main}  {...rest}>
            <h1>{title}</h1>
            {children}
            <button>Далее</button>
        </form>
    )
}