import { FC, createContext, useContext, useEffect, useState } from "react";
import { IData } from "../types/StepsInterfaces";

interface IOrderContext {
  orders: [],
  addOrders: (order: IData) => void
}

export const OrderContext = createContext<IOrderContext>({
  orders: [],
  addOrders: (order: IData) => { return null }
})

export const useOrderContext = () => { return useContext(OrderContext) }

export const OrderProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<any>([])

  const addOrders = (newOrder: any) => {

    setOrders((prev: any) => (
      [...prev, newOrder]
    ))
  }



  return (
    <OrderContext.Provider value={{ addOrders, orders }}>
      {children}
    </OrderContext.Provider>
  )
}



