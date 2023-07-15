export interface IPackageData {
    fromWhom: IParticipant
    toWhom: IParticipant
    isSimply: boolean
}

interface IParticipant {
    person: IPerson
    address: IAddress
}
interface IPerson {
    firstName: string
    LastName: string
}

interface IAddress {
    country: string
    city: string
    street: string
    house: string
}