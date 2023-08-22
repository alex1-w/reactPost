import { FC, createContext, useContext, useEffect, useState } from "react";
import { IData, IStepFive, IStepFour, IStepOne, IStepThree, IStepTwo } from "../types/StepsInterfaces";

// type DataVariant = IStepOne | IStepTwo | IStepThree | IStepFour | IStepFive

interface IDataContext {
  data: IData;
  setDataValues: (newData: IData) => void;
}

export const DataContext = createContext<IDataContext>({
  data: {} as IData,
  setDataValues: (_newData: IData) => { return null },
});

export const DataProvider: FC<{ children: React.ReactNode }> = ({ children, }) => {

  const [data, setData] = useState<IData>({} as IData);



  return (
    <DataContext.Provider value={{ setDataValues: setData, data, }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
