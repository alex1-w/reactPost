import styles from './StepTwo.module.scss'
import { Button, Checkbox, FormControlLabel } from "@mui/material"
import { Container } from "../../components/Container/Container"
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigation } from '../../components/Navigation/Navigation'
import { SelectItem } from '../../components/UI/SelectItem/SelectItem'
import { RadioBlock } from '../../components/UI/RadioBlock/RadioBlock'

export const options = [
    {
        value: 'usa',
        label: 'USA'
    },
    {
        value: 'russia',
        label: 'Russia'
    },
    {
        value: 'japan',
        label: 'Japan'
    },
    {
        value: 'chine',
        label: 'Chine'
    },
]

const insuranceTypes = [
    {
        name: 'simple',
        label: 'simple',
        price: 200,
    },
    {
        name: 'standart',
        label: 'standart',
        price: 500,
    },
    {
        name: 'pro',
        label: 'pro',
        price: 500,
    },
]

interface IStepTwo {
    sendersCountry: string,
    receiverCountry: string,
    insurance: boolean
    insuranceType?: 'simple' | 'standart' | 'pro'
}
const getValue = (value: string) => value ? options.find(option => option.value === value) : ''

export const StepTwo = () => {
    const { register, handleSubmit, control, formState: { errors }, watch } = useForm<IStepTwo>({
        mode: 'onBlur',
        defaultValues:
        {
            sendersCountry: '',
            receiverCountry: '',
            insurance: false,
            // insuranceType: null
        }
    })



    const isInsurance = watch('insurance')
    // console.log(watch());

    // console.log(watch());
    console.log('errors', errors);
    const onSubmit: SubmitHandler<IStepTwo> = data => {

    }

    return (
        <>
            <Container>

                <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
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


                        {/* <Controller
                            control={control}
                            rules={{ required: { message: 'поле обязательно', value: true } }}
                            name='receiverCountry'
                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                <>
                                    <ReactSelect
                                        onChange={(newValue) => { onChange((newValue as IOption).value) }}
                                        value={getValue(value)}
                                        options={options}
                                        placeholder='страна получателя'
                                    />
                                    {error && <p>{error?.message}</p>}
                                </>)}
                        /> */}

                        <div className={styles.insuranceBlock}>
                            <FormControlLabel
                                className={styles.checkBox}
                                label='сложная посылка'
                                control={<Checkbox {...register('insurance')} name='insurance' />}
                            />
                            {isInsurance &&
                                <RadioBlock name='расценки' values={insuranceTypes} />
                            }
                        </div>

                        {/* 
                        <FormControl>
                            <FormLabel>Colors</FormLabel>
                            <RadioGroup defaultValue="medium" name="radio-buttons-group" row={true}>
                                <FormControlLabel control={<Radio />} value="primary" label="Primary" color="primary" />
                                <FormControlLabel control={<Radio />} value="danger" label="Danger" color="danger" />
                                <FormControlLabel control={<Radio />} value="info" label="Info" color="info" />
                            </ RadioGroup >
                        </FormControl> */}
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

            </Container >

        </>
    )
}