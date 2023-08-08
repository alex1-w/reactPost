import styles from './PackageItem.module.scss'
import { FC } from 'react'
import { IData } from '../../types/StepsInterfaces'

export const PackageItem: FC<IData> = ({ stepFive, stepFour, stepOne, stepThree, stepTwo }) => {
    return (
        <div className={styles.main}>

            <div className={styles.main__head}>
                <div>
                    <p>{stepOne.firstNameSenders}</p>
                    <p>{stepOne.lastNameSenders}</p>
                    <p>{stepOne.phoneNumberSenders}</p>
                </div>

                <div>
                    <p>{stepOne.firstNameReceiver}</p>
                    <p>{stepOne.lastNameReceiver}</p>
                    <p>{stepOne.phoneNumberReceiver}</p>
                </div>
            </div>

        </div>
    )
}