/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Image from 'next/image'
import styles from '../../src/styles/index.module.css'

export default function Preloader() {

    return (
        <div id="preloader" className={styles["preloader"]} style={{background: "#010125 url('/preloader.gif') no-repeat center center"}}>
            <div className={styles["z"]}>
                <img src="/z.jpg" alt="z" />
            </div>
        </div>
    )
}