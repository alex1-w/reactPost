import { FC, useEffect } from "react"

import { Navigate, useNavigate } from "react-router-dom"
import { useAccessProvider } from "../providers/AccessProvider"

interface IRequireAccess {
    children: React.ReactNode;
    type?: | 'stepTwo' | 'stepThree' | 'stepFour' | 'stepFive'
}

export const RequireAccess: FC<IRequireAccess> = ({ children, type }) => {
    const navigate = useNavigate()
    const { access, setAccess } = useAccessProvider()

    // useEffect(() => {
    //     if (access.accessStepTwo === false) {
    //         navigate(-1)
    //     } else {
    //         return
    //     }
    //     if (!access.accessStepThree) {
    //         navigate(-1)
    //     } else {
    //         return
    //     }
    //     if (!access.accessStepFour) { return navigate(-1) }
    //     if (!access.accessStepFive) { return navigate(-1) }
    // }, [access])


    // useEffect(() => {
    // }, [])


    return (
        <>{children}</>
    )
}