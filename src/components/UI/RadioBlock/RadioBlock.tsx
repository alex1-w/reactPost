import { FC } from 'react'
import styles from './RadioBlock.module.scss'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { Controller } from 'react-hook-form'
import { IDeliveryType } from '../../../data/data'

interface IRadioBlockProps {
    name: string
    values: any[]
    control: any
    errors: any
}

export const RadioBlock: FC<IRadioBlockProps> = ({ name, values, control, errors }) => {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, name }, formState }) => (
                <>
                    <FormControl>
                        <FormLabel>{name}</FormLabel>

                        <RadioGroup row
                        //    onChange={(newValue) => { onChange((newValue as IDeliveryType).value) }}
                        >
                            {values.map(item => (
                                <div className={styles.radioGroup}>
                                    <FormControlLabel
                                        key={item.name}
                                        control={
                                            <Radio name={item.name} />
                                        }
                                        value={item.name}
                                        label={item.label}
                                        color="primary"
                                    />
                                    <span>{item.price}</span>
                                </div>
                            ))}

                        </RadioGroup>
                    </FormControl>
                </>
            )}
        />
    )
}