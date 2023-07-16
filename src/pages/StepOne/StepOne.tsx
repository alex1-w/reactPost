import styles from './StepOne.module.scss'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Header } from '../../components/Header/Header'
import { Button, Typography } from '@mui/material'
import { useData } from '../../providers/DataContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { Navigation } from '../../components/Navigation/Navigation'
import { InputBlock } from '../../components/UI/InputBlock/InputBlock'

export interface IStepOne {
    firstNameSenders: string,
    lastNameSenders: string,
    phoneNumberSenders: string,
    phoneNumberReceiver: string,
    firstNameReceiver: string,
    lastNameReceiver: string,
}

export const StepOne = () => {
    const { setDataValues, data } = useData()
    const navigation = useNavigate()

    const { register, handleSubmit, formState: { errors, isValid, submitCount } } = useForm<IStepOne>({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues:
        {
            firstNameSenders: '',
            lastNameSenders: '',
            phoneNumberSenders: '',
            firstNameReceiver: '',
            lastNameReceiver: '',
            phoneNumberReceiver: '',
        }
    })

    const fieldNameCheck = (field: string) => { return Boolean(field.match(/[a-z]/i)) || 'только латиница' }

    const error: SubmitErrorHandler<IStepOne> = data => { console.log('error', data) }

    const submit: SubmitHandler<IStepOne> = data => {
        console.log('submit', data.firstNameReceiver);

        setDataValues(
            {
                ...data,
                fromWhom: { person: { firsName: data.firstNameSenders, lastName: data.lastNameSenders } },
                toWhom: { person: { firsName: data.firstNameReceiver, lastName: data.lastNameReceiver } }
            }
        )
        console.log(data);

        return navigation('/step-two')
    }
    console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(submit, error)} className={styles.formBlock} noValidate>

                <Navigation />

                <div className={styles.formBlock__item}>

                    <h3 >От кого</h3>

                    <InputBlock
                        errors={errors}
                        name='firstNameSenders'
                        register={register}
                        rules={{
                            validate: fieldNameCheck,
                            minLength: 2,
                            required: {
                                value: true,
                                message: 'поле не заполнено'
                            }
                        }}
                        size='medium'
                        type='text'
                        label='Имя отправителя'
                    />
                    <InputBlock
                        errors={errors}
                        name='lastNameSenders'
                        register={register}
                        rules={{
                            validate: fieldNameCheck,
                            minLength: 2,
                            required: {
                                value: true,
                                message: 'поле не заполнено'
                            }
                        }}
                        size='medium'
                        type='text'
                        label='Имя отправителя'
                    />
                    <InputBlock
                        errors={errors}
                        name='phoneNumberSenders'
                        register={register}
                        rules={{
                            // validate: checkNumber,
                            // minLength: 7,
                            // max: 10,
                            required: {
                                value: true,
                                message: 'поле не заполнено'
                            }
                        }}
                        size='medium'
                        type='number'
                        label='номер тел. отправителя'
                    />

                </div>

                <div className={styles.formBlock__item}>

                    <h3>Кому</h3>

                    <InputBlock
                        errors={errors}
                        name='firstNameReceiver'
                        register={register}
                        rules={{
                            validate: fieldNameCheck,
                            minLength: 2,
                            required: {
                                value: true,
                                message: 'поле не заполнено'
                            }
                        }}
                        size='medium'
                        type='text'
                        label='Имя получателя'
                    />

                    <InputBlock
                        errors={errors}
                        name='lastNameReceiver'
                        register={register}
                        rules={{
                            validate: fieldNameCheck,
                            minLength: { value: 2, message: 'минимальное значение - 2' },
                            required: {
                                value: true,
                                message: 'поле не заполнено'
                            }
                        }}
                        size='medium'
                        type='text'
                        label='Фамилия получателя'
                    />
                    <InputBlock
                        errors={errors}
                        name='phoneNumberReceiver'
                        register={register}
                        rules={{
                            // validate: checkNumber,
                            // minLength: 7,
                            // max: 10,
                            required: {
                                value: true,
                                message: 'поле не заполнено'
                            }
                        }}
                        size='medium'
                        type='number'
                        label='номер тел. отправителя'
                    />

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
            </form >
        </>

    )
}