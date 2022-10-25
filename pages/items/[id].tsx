import React from 'react'
import {useRouter} from 'next/router'
import styles from '../src/styles/itemPage.module.css'

export default function Page() {

    const router = useRouter()

    const {id} = router.query

    return(
        <div className={styles.wrapper}>
            
        </div>
    )
}