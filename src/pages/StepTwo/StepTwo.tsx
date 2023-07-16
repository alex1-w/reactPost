import styles from './StepTwo.module.scss'
import { Button, Checkbox, FormControlLabel } from "@mui/material"
import { Container } from "../../components/Container/Container"
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Navigation } from '../../components/Navigation/Navigation'
import { SelectItem } from '../../components/UI/SelectItem/SelectItem'
import { RadioBlock } from '../../components/UI/RadioBlock/RadioBlock'
import { insuranceTypes, options, deliveryType } from '../../data/data'
import { InputBlock } from '../../components/UI/InputBlock/InputBlock'
import { AnimatePresence, motion } from 'framer-motion';

interface IStepTwo {
    sendersCountry: string,
    receiverCountry: string,
    insurance: boolean
    insuranceType?: 'simple' | 'standart' | 'pro'
}
const getValue = (value: string) => value ? options.find(option => option.value === value) : ''

export const StepTwo = () => {
    const { register, handleSubmit, control, formState: { errors, submitCount, isValid }, watch } = useForm<IStepTwo>({
        mode: 'onBlur',
        defaultValues:
        {
            sendersCountry: '',
            receiverCountry: '',
            insurance: false,
            // insuranceType:
        }
    })

    const isInsurance = watch('insurance')

    const error = () => {
        console.log('errors', errors);
    }
    const submit: SubmitHandler<IStepTwo> = data => {
        console.log('submit', data);
    }

    return (
        <Container>

            <form className={styles.formBlock} onSubmit={handleSubmit(submit, error)}>
                <Navigation />

                <div className={styles.formBlock__content}>
                    <SelectItem
                        control={control}
                        errors={errors}
                        name='sendersCountry'
                        rules={{ required: { message: 'поле обязательно', value: true } }}
                        placeholder='страна отправителя'
                        options={options}
                    />
                    <SelectItem
                        control={control}
                        errors={errors}
                        name='receiverCountry'
                        rules={{ required: { message: 'поле обязательно', value: true } }}
                        placeholder='страна отправителя'
                        options={options}
                    />

                    <div className={styles.packageSizing}>
                        <InputBlock
                            numberStyle={{ style: 'numberType', unitOffMeasurement: 'см' }}
                            type='number'
                            name='package-size-height'
                            register={register}
                            size='small'
                            errors={errors}
                            rules={{
                                max: {
                                    value: 70,
                                    message: 'не больше 70см'
                                },
                                required: {
                                    message: 'размер не выбран',
                                    value: true
                                }
                            }}
                        />
                        <InputBlock
                            numberStyle={{ style: 'numberType', unitOffMeasurement: 'см' }}
                            type='number'
                            name='package-size-width'
                            register={register}
                            size='small'
                            errors={errors}
                            rules={{
                                max: {
                                    value: 40,
                                    message: 'не больше 40см'
                                },
                                required: {
                                    message: 'размер не выбран',
                                    value: true
                                }
                            }}
                        />
                        <InputBlock
                            numberStyle={{ style: 'numberType', unitOffMeasurement: 'см' }}
                            type='number'
                            name='package-size-length'
                            register={register}
                            size='small'
                            errors={errors}
                            rules={{
                                max: { value: 100, message: 'не больше 100см' },
                                required: {
                                    message: 'размер не выбран',
                                    value: true
                                }
                            }}
                        />
                        <InputBlock
                            numberStyle={{ style: 'numberType', unitOffMeasurement: 'кг' }}
                            type='number'
                            name='package-weight'
                            register={register}
                            size='small'
                            errors={errors}
                            rules={{
                                max: { value: 10, message: 'не больше 10кг' },
                                required: {
                                    message: 'размер не выбран',
                                    value: true
                                }
                            }}
                        />
                    </div>

                    <div className={styles.insuranceBlock}>
                        <FormControlLabel
                            className={styles.checkBox}
                            label='страховка'
                            control={
                                <Checkbox {...register('insurance')} name='insurance' />
                            }
                        />
                        <AnimatePresence>
                            {isInsurance &&
                                <motion.div
                                    className={styles.insurancePrices}
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: 'auto', opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                >

                                    <RadioBlock control={control} errors={errors} name='расценки' values={insuranceTypes} />

                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>


                    <div className={styles.deliveryType} >
                        <RadioBlock
                            values={deliveryType}
                            name='способ доставки'
                            control={control}
                            errors={errors}
                        />
                    </div>

                </div>

                <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    size='large'
                    disabled={submitCount !== 0 && !isValid}
                >
                    Далее
                </Button>
            </form>
        </Container >
    )
}