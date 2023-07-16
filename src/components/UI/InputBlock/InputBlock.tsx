import styles from './InputBlock.module.scss'
import { TextField } from "@mui/material"
import { FC } from "react"
import { RegisterOptions, UseFormRegister } from "react-hook-form"
import { AnimatePresence, motion } from 'framer-motion'
import cn from 'classnames'



interface IInputBlock {
    card?: boolean
    numberStyle?: { style: 'numberType', unitOffMeasurement: 'кг' | 'см' }
    placeholder?: string
    name: string,
    label?: string
    size: 'small' | 'medium'
    type: 'number' | 'text' | 'password'
    register: UseFormRegister<any>
    errors: any
    rules: RegisterOptions
}

export const InputBlock: FC<IInputBlock> = ({ errors, name, placeholder, register, rules, size, type, label, numberStyle, card }) => {


    // const cardResolver = (nums: number) => {
    // const cardFormating = new Intl.NumberFormat('en-GB', { style: '' })
    // }

    const cardFormatting = (nums: any) => {
        // return nums.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ').substr(0, 16) || ''
        // return nums.replace(/(.{4})/g, "$1-");
        // return nums.match(new RegExp('.{1,4}', 'g')).join(' ');
    }

    return (

        <div className={cn(styles.main, { [styles.numberType]: numberStyle?.style === 'numberType' })} >
            <div className={styles.main__inputBlock}>

                <TextField
                    type={type}
                    size={size}
                    className={styles.inp}
                    label={label}
                    // inputMode={card ?'numeric': 'decimal'}
                    {...(register &&
                        register(name, { ...rules }))}
                    // onChange={(event) => {
                    //     const { value } = event.target
                    //     event.target.value = cardFormatting(value)
                    // }}

                />
                <p>{numberStyle?.unitOffMeasurement}</p>
            </div>

            <AnimatePresence>
                {errors[name] &&
                    <motion.p
                        className={styles.errorsBlock}
                        initial={{ height: 0, y: '-100' }}
                        animate={{ height: 'auto', y: 0 }}
                        exit={{ height: 0, y: '-100' }}
                    >
                        {errors[name].message}
                    </motion.p>}
            </AnimatePresence>

        </div>
    )
}