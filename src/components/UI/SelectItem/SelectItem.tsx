import styles from './SelectItem.module.scss'
import { FC } from 'react'
import { Controller, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'
import { IOption } from '../../../types/data.inrterface'
import { AnimatePresence, motion } from 'framer-motion'

interface ISelectProps {
    control: any
    register?: any
    name: string
    rules: RegisterOptions
    errors?: any
    placeholder: string
    options: any[]
}


export const SelectItem: FC<ISelectProps> = ({ control, register, name, rules, errors, placeholder, options }) => {

    const getValue = (value: string) => value ? options.find(option => option.value === value) : ''

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { name, value, onChange }, fieldState: { error } }) => (
                <div className={styles.main}>

                    <ReactSelect
                        onChange={(newValue) => { onChange((newValue as IOption).value) }}
                        value={getValue(value)}
                        options={options}
                        placeholder={placeholder}
                    />

                    <AnimatePresence>
                        <motion.div
                            initial={{ height: 0, y: '-100' }}
                            animate={{ height: 'auto', y: 0 }}
                            exit={{ height: 0, y: '-100' }}
                        >

                            {errors &&
                                <motion.p
                                >
                                    {errors[name]?.message}
                                </motion.p>}

                        </motion.div>
                    </AnimatePresence>

                </div>
            )}

        />
    )
}