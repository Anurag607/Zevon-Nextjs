/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useCallback } from 'react'
import Router, {useRouter} from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../src/styles/index.module.css'

interface LoginForm extends HTMLFormControlsCollection {
    username : HTMLInputElement,
    password : HTMLInputElement
}

interface LoginFormEl extends HTMLFormElement {
    readonly elements : LoginForm
}

type template = { username : string, password : string }

export default function Login() {

    const router = useRouter()

    const styling = {
        username: React.useRef<HTMLInputElement>(null),
        pass: React.useRef<HTMLInputElement>(null),
        warning: React.useRef<HTMLInputElement>(null),
        toSignup: React.useRef<HTMLInputElement>(null)
    }

    const [logindet, Setlogindet] = React.useState<template>({
        username : '',
        password : ''
    })

    const HandleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        let target = e.currentTarget
        switch(target.name) {
            case 'username' : {
                Setlogindet({
                    ...logindet,
                    username : target.value
                })
                break
            }
            case 'password' : {
                Setlogindet({
                    ...logindet,
                    password : target.value
                })
                break
            }
            default : {
                Setlogindet({
                    ...logindet,
                })
                break
            }
        }
    }

    const HandleSubmit = useCallback((e : React.FormEvent<LoginFormEl>) => {
        e.preventDefault();
        fetch('/api/users/login/', {
            method : 'POST',
            mode : 'cors',
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify(logindet),
        })
        .then(response => response.text())
        .then(resMessage => {
            console.log(resMessage)
            if(resMessage === 'success') {
                styling.warning.current!.style.display = 'none'
                styling.username.current!.style.border = 'transparent'
                styling.pass.current!.style.border = 'transparent'
                styling.toSignup.current!.style.marginTop = '5rem'
                router.push(`/home/${logindet.username}`, '/home', {shallow: true})
            } else {
                styling.warning.current!.style.display = 'block'
                styling.username.current!.style.border = '0.05rem solid red'
                styling.pass.current!.style.border = '0.05rem solid red'
                styling.toSignup.current!.style.marginTop = '3rem'
            }
        })
    },[logindet])

    React.useEffect(() => {
        router.prefetch('/home')
    },[])

    return (
        <main className={styles.loginWrapper}>
            <Head>
                <link rel = "icon" href = "/z.png" type = "image/x-icon" />
                <meta charSet="UTF-8" />
                <meta name="description" content="E-commerce Web App" />
                <meta name="keywords" content="Fashion, Commerce, Clothing" />
                <meta name="author" content="Deep" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
                <title>Zevon</title>
            </Head>
            <div>
                <form onSubmit={HandleSubmit}>
                    <h2>Login</h2>
                    <span className={styles.warning} ref={styling.warning}>Invalid Username or Password</span>
                    <span>
                        <label htmlFor='username'>
                            Username: 
                            <span className={styles.user}>
                                <span />
                                <input name='username' ref={styling.username} id='username' value={logindet.username} onChange={HandleChange} type="text" placeholder='Enter your Username'/>
                            </span>
                        </label>
                    </span>
                    <span>
                        <label htmlFor='password'>
                            Password: 
                            <span className={styles.pass}>
                                <span />
                                <input name='password' ref={styling.pass} id='password' value={logindet.password} onChange={HandleChange} type="password" placeholder='Enter your Password' />
                            </span>
                            <span>
                                Forgot your Password?
                                <Link href='/passReset' passHref><a className={styles.loginLinks}>Reset Here</a></Link>
                            </span>
                        </label>
                    </span>
                    <input type='submit' placeholder='Login' value='Login' name='submit' className={styles.loginSubmit} />
                    <section>
                        <p>Or Sign Up using </p>
                        <div>
                            <a href="#" />
                            <a href="#" />
                            <a href="#" />
                        </div>
                    </section>
                    <span className={styles.toSignup} ref={styling.toSignup}>
                        Dont have an account?
                        <Link href='/signup' passHref><a className={styles.loginLinks}>Sign Up</a></Link>
                    </span>
                </form>
            </div>
        </main>
    )
}
