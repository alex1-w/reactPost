import styles from './Packages.module.scss'
import { Container } from '../../components/Container/Container'
import { useOrderContext } from '../../providers/OrdersContext'
import { PackageItem } from '../../components/PackageItem/PackageItem'
import { IData } from '../../types/StepsInterfaces'


export const Packages = () => {
    const { orders } = useOrderContext()

    return (
        <Container>

            <div className={styles.main}>


                {orders.length ? orders.map((order: IData) => (
                    <PackageItem
                        stepFive={order.stepFive}
                        stepFour={order.stepFour}
                        stepThree={order.stepThree}
                        stepOne={order.stepOne}
                        stepTwo={order.stepTwo}
                    />
                )) :

                    <h3>пока пусто</h3>
                }

            </div>

        </Container>
    )
}