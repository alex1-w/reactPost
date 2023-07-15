import { FC, createContext, useContext, useState } from "react";
import { IPackageData } from "../types/stepOne.interface";

type Data = { [key: string]: string | number }

interface IDataContext {
    data: Data
    setDataValues: (newData: Data) => void
}

export const DataContext = createContext<IDataContext>({
    setDataValues: (_newData: Data) => { return null },
    data: {}
})

export const DataProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState({})

    const setDataValues = (newData: Data) => {
        setData((prev) => ({
            ...prev,
            ...newData
        }))
        // console.log(data);
    }

    return (
        <DataContext.Provider value={{ setDataValues, data }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)



// import { FC, createContext, useContext, useState } from "react";
// import { IPackageData } from "../types/stepOne.interface";

// // interface IDataContext extends IPackageData {


// export const DataContext = createContext<IDataContext>({
//     // fromWhom: {
//     //     address: { city: '', country: '', house: '', street: '' },
//     //     person: { firstName: '', LastName: '' },
//     // },
//     // toWhom: {
//     //     address: { city: '', country: '', house: '', street: '' },
//     //     person: { firstName: '', LastName: '' }
//     // },
//     // isSimply: false,
//     setData: (newData) => { return null }
// })

// export const DataProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

//     const [data, setData] = useState({})

//     const setDataValues = (newData: any) => {
//         setData({
//             ...prev => newData
//         })
//         // setData((prev) => ({
//         //     ...prev,
//         //     ...newData
//         // }))
//     }

//     return (
//         <DataContext.Provider value={{ setData }}>
//             {children}
//         </DataContext.Provider>
//     )
// }

// export const useData = () => useContext(DataContext) 