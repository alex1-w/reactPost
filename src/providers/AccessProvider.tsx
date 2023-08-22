import { FC, createContext, useContext, useState } from "react"
import { IData, IStepFive, IStepFour, IStepOne, IStepThree, IStepTwo } from "../types/StepsInterfaces"

// type DataVariant = IStepOne | IStepTwo | IStepThree | IStepFour | IStepFive
type IAccessType = 'accessStepOne' | 'accessStepTwo' | 'accessStepThree' | 'accessStepFour' | 'accessStepFive'

interface IAccessData {
    accessStepOne: boolean,
    accessStepTwo: boolean,
    accessStepThree: boolean,
    accessStepFour: boolean,
    accessStepFive: boolean,
}

interface IAccessContext {
    access: IAccessData,
    setAccess: (access: IAccessData) => void
}

export const AccessContext = createContext<IAccessContext>({
    access: {} as IAccessData,
    setAccess: () => { return null }
})

const AccessProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [access, setAccess] = useState<IAccessData>({} as IAccessData)


    return (
        <AccessContext.Provider value={{ access, setAccess }}>
            {children}
        </AccessContext.Provider>
    )
};

export default AccessProvider;
export const useAccessProvider = () => { return useContext(AccessContext) }