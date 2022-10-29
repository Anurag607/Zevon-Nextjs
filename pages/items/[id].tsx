import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../src/styles/index.module.css'
import Head from 'next/head'
import NavBar from '../../src/components/navbar'
import Footer from '../../src/components/footer'

const Sizegen = (props: any) => {
    return <li><a href="#">{props.size}</a></li>
}

const SizeGen:React.FC = () => {
    let sizes = [ 'S', 'M', 'L', 'XL', 'XXL' ]
    return (
        <div className={styles.itemSizes}>
            <ul>
                {sizes.map((el,i) => {
                    return <Sizegen key={i} size={el} />
                })}
            </ul>
        </div>
    )
}

export default function Page() {

    const router = useRouter()

    const {id} = router.query

    return(
        <div className={styles.itemWrapper}>
            <Head>
                <link rel = "icon" href = "/z.png" type = "image/x-icon" />
                <meta charSet="UTF-8" />
                <meta name="description" content="E-commerce Web App" />
                <meta name="keywords" content="Fashion, Commerce, Clothing" />
                <meta name="author" content="Deep" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
                <title>Zevon</title>
            </Head>
            <NavBar />
            <div className={styles.itemContent}>
                <section className={styles.itemImg}></section>
                <section className={styles.itemDetails}>
                    <div className={styles.itemName}>
                        Lorem ipsum dolor sit amet <br />
                        consectetur adipiscing elit.
                    </div>
                    <div className={styles.itemPrice}>
                        Price : ₹1200.00 <br />
                        Inclusive of all taxes
                    </div>
                    <div className={styles.itemColors}>
                        <span className={styles.Color1} />
                        <span className={styles.Color2} />
                    </div>
                    <SizeGen />
                    <button className={styles.addItem}>
                        <span />
                        Add To Cart
                    </button>
                    <div className={styles.addtoWish}>
                        <span />
                        Add To Wishlist
                    </div>
                </section>  
            </div>
            <Footer />
        </div>
    )
}