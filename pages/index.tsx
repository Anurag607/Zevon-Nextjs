/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Head from 'next/head'
import styles from '../src/styles/index.module.css'
import {useRouter} from 'next/router'
import Preloader from '../src/components/preloader'

export default function Home() {

    const router = useRouter()

    React.useEffect(() => {
        setTimeout(() => {
            router.push('/home', '/home', {shallow: true})
        }, 2500)
    },[router])

    return (
        <>
            <Head>
                <link rel = "icon" href = "/z.png" type = "image/x-icon" />
                <meta charSet="UTF-8" />
                <meta name="description" content="E-commerce Web App" />
                <meta name="keywords" content="Fashion, Commerce, Clothing" />
                <meta name="author" content="Deep" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
                <title>Zevon</title>
            </Head>
            <Preloader />
        </>
    )
}