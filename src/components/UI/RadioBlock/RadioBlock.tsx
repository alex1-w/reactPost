import { FC } from 'react'
import styles from './RadioBlock.module.scss'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"

interface IRadioBlockProps {
    name: string
    values: any[]
}

export const RadioBlock: FC<IRadioBlockProps> = ({ name, values }) => {


    return (
        <>
            <FormControl>
                <FormLabel>{name}</FormLabel>

                <RadioGroup>
                    {values.map(item => (
                        <div className={styles.insuranceBlock__item}>
                            <FormControlLabel
                                key={item.name}
                                control={<Radio name={item.name} />}
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
    )
}