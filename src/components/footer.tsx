/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Image from 'next/image'
import styles from '../../src/styles/index.module.css'
import { preLoader } from '../../src/script/PreLoader.mjs'

export default function Footer() {

    return (
        <footer className={`${styles['main']} ${styles['footer']}`}>
            <section id="contact" className={styles.contact}>
                <div id="footlogo" className={styles.footlogo}><h2>Zevon</h2></div><br />
                <div id="contact_number" className={styles['contact_number']}>
                    <Image src="/icon-phone.svg" alt="phone" width={18} height={18} layout='intrinsic' />
                    <span>Phone: +1-543-123-4567</span>
                </div>
                <div id="contact_email" className={styles['contact_email']}>
                    <Image src="/icon-email.svg" alt="email" width={20} height={16} layout='intrinsic' />
                    <span>Email: zevon@gmail.com</span>
                </div>
                <br />
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginLeft: "-0.75rem"}}>
                    <a href="#"><Image className={styles["contact_ico"]} src="/f.svg" alt="facebook" width={40} height={40} layout='intrinsic' /></a>
                    <a href="#"><Image className={styles["contact_ico"]} src="/i.svg" alt="insta" width={40} height={40} layout='intrinsic' /></a>
                    <a href="#"><Image className={styles["contact_ico"]} src="/t.svg" alt="twitter" width={40} height={40} layout='intrinsic' /></a>
                    <a href="#"><Image className={styles["contact_ico"]} src="/l.svg" alt="linkedin" width={40} height={40} layout='intrinsic' /></a>
                </div>
            </section>
            <section id="newsletter" className={styles["newsletter"]} >
                <h1 style={{margin: "0"}}>NEWSLETTER</h1>
                <p style={{fontSize: "1rem"}}>
                    To receieve your weekly fashion tips, <br />
                    sign up to our weekly newsletter. We'll never send <br />
                    you spam or pass on your eamil address
                </p><br />
                <form className={styles.Subform}>
                    <input type="email" id="email" className={styles["email"]} name="email" placeholder="example@gmail.com" />
                    <input type="submit" value="Subscribe" id="submit" className={styles["submit"]} />
                </form>
            </section>
        </footer>
    )
}