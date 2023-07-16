export interface IForm {
    name: string
    email: string
    address: IAdderss
}
export interface IAdderss {
    country: string
    city: string
    street: string
    house: string
}

export interface IOption {
    value: string
    label: string
}

export interface IDataContext {
    fromWhom: {
        address: { city: string, country: string, house: string, street: string },
        person: { firstName: string, LastName: string },
    },
    toWhom: {
        address: { city: string, country: string, house: string, street: string },
        person: { firstName: string, LastName: string }
    },
    isSimply: boolean,
    setData: (newData: any) => void
}