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

export const insuranceTypes = [
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

export interface IDeliveryType {
    value: string
    label: string
    price: number
}

export const deliveryType = [
    {
        value: 'standart',
        label: 'standart',
        price: 100
    },
    {
        value: 'medium',
        label: 'medium',
        price: 300
    },
    {
        value: 'high',
        label: 'high',
        price: 1000
    },
    {
        value: 'super-express',
        label: 'super-express',
        price: 100
    },
]