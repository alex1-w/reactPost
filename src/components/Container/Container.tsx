import React, { FC } from 'react'
import styles from './Container.module.scss'

export const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}