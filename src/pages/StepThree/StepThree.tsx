import styles from './StepThree.module.scss'
import { Navigation } from "../../components/Navigation/Navigation"
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { InputBlock } from '../../components/UI/InputBlock/InputBlock'

export const StepThree = () => {

    const { register, control, formState: { errors, isValid }, handleSubmit } = useForm({
        mode: 'onBlur'
    })

    const error = () => { }

    const submit = () => { }

    return (
        <>
            <form className={styles.formBlock} onSubmit={handleSubmit(submit, error)}>

                <Navigation />

                <div className={styles.formBlock__item}>

                    <InputBlock
                        errors={errors}
                        name='card'
                        register={register}
                        rules={{ min: { value: 16, message: 'требуется 16 символов' } }}
                        size='medium'
                        type='number'
                        label='Номер карты'
                        // card={true}
                    />
                </div>

                <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    size='large'
                // disabled={submitCount !== 0 && !isValid}
                >
                    Далее
                </Button>

            </form>
        </>
    )
} 