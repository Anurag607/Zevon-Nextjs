/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Image from 'next/image'
import styles from '../../src/styles/index.module.css'
import { preLoader } from '../../src/script/PreLoader.mjs'
import Link from 'next/link'

export default function NavBar(props : Object) {

    return (
        <nav className = {styles.nav}>
            <div className={styles["nav-left"]}>
                <li><a className= {styles.navl} href="#">Home</a></li>
                <li><a className= {styles.navl} href="#">Blog</a></li>
                <li><a className= {styles.navl} href="#">About</a></li>
                <li><a className= {styles.navl} href="#">Contact</a></li>
            </div>
            <div className={styles["nav-right"]}>
                <div className={styles["searchbox"]} id="searchbox">
                    <input type="search" placeholder="Search" />
                    <Image src="/search1.png" id="search-img" className={styles['search-img']} alt="search" data-toggle="off" width={32} height={32} layout='intrinsic' />
                </div>
                <div className={styles["navicons"]}>
                    <a className= {styles["navico"]} href="#"><Image className={styles.navimg} src="/wishlist.png" alt="wishlist" width={32} height={32} layout='intrinsic' /></a>
                    <a className= {styles["navico"]} href="#"><Image className={styles.navimg} src="/cart.png" alt="cart" width={32} height={32} layout='intrinsic' /></a>
                    {/* {(props.isLoggedIn) ?
                        <Link href='/login' passHref>
                            <a className={styles.login}>Login</a>
                        </Link> : 
                        <Link href='/dashboard' passHref>
                            <a className={styles.navDash}>
                                <div />
                                <div>{props.username}</div>
                            </a>
                        </Link> 
                    } */}
                    {/* <Link href='/dashboard' passHref>
                        <a className={styles.navDash}>
                            <div />
                            <div>Username</div>
                        </a>
                    </Link>  */}
                    <Link href='/login' passHref>
                        <a className={styles.login}>Login</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}