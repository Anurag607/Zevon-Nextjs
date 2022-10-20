/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../src/styles/index.module.css'
import main from '../src/script/main.mjs'

const BlogGen = (props: any) => {
    let src = `/${props.img}.jpg`
    return (
        <div className={styles["c"]}>
            <Image src={src} alt="Image17" /*style={{width:"100%", height:"auto"}} */width={256} height={384} />
            <div className={styles["overlay1"]} />
        </div>
    )
}

const Blog = () => {
    const img = ['m1','w3','m3','w5',]
    return (
        <div className={`${styles['cardcont']} ${styles['blog']}`}>
            <div className={styles["heading"]}>
                <p className={styles["div_title"]}>LATEST FROM BLOG</p>
                <p className={styles["div_subtitle"]}>THE FRESHEST AND MOST EXCITING NEWS</p>
            </div>
            <div className={styles["card"]}>
                {img.map((el,i) => {
                    return <BlogGen key={i} img={el} />
                })}
            </div>
            <br /><br /><br /><br />
        </div>
    )
}

const Sizegen = (props: any) => {
    return <li><a href="#">{props.size}</a></li>
}

const CardGen = (props: any) => {
    let src=`/${props.img}.webp`
    const size = ['S', 'M', 'L', 'XL', 'XXL']
    return (
        <div className="c">
            <Image src={src} alt="Image" width={256} height={320} layout='intrinsic' />
            <a href="#"><Image src="/add.svg" className={styles["cardadd"]} alt="ADD TO CART" width={0} height={0} /></a>
            <a href="#"><Image src="/wish.svg" className={styles["cardwish"]} alt="ADD TO WISHLIST" width={0} height={0} /></a>
            <div className={styles["size"]}>
                <ul>
                    {size.map((el,i) => {
                        return <Sizegen key={i} size={el} />
                    })}
                </ul>
            </div>
        </div>
    )
}

const CardCont1 = () => {
    const img1 = ['c9', 'c10', 'c11', 'c12']
    const img2 = ['c13', 'c14', 'c15', 'c16']
    return (
        <div className={styles["cardcont"]}>
            <div className={styles["heading"]}>
                <p className={styles["div_title"]}>TRENDING</p>
                <p className={styles["div_subtitle"]}>TOP WISHES OF THIS WEEK</p>
            </div>
            <div className={styles["card"]}>
                {img1.map((el,i) => {
                    return <CardGen key={i} img={el}/>
                })}
            </div>
            <br />
            <div className={styles["card"]}>
                {img2.map((el,i) => {
                    return <CardGen key={i} img={el} />
                })}
            </div>
            <br /><br /><br /><br />
        </div>
    )
}

const CardCont2 = () => {
    const img1 = ['c1', 'c2', 'c3', 'c4']
    const img2 = ['c5', 'c6', 'c7', 'c8']
    return (
        <div className={styles["cardcont"]}>
            <div className={styles["heading"]}>
                <p className={styles["div_title"]}>BEST SELLER</p>
                <p className={styles["div_subtitle"]}>TOP PRODUCTS OF THIS WEEK</p>
            </div>
            <div className={styles["card"]}>
                {img1.map((el,i) => {
                    return <CardGen key={i} img={el}/>
                })}
            </div>
            <br />
            <div className={styles["card"]}>
                {img2.map((el,i) => {
                    return <CardGen key={i} img={el} />
                })}
            </div>
            <br /><br /><br /><br />
        </div>
    )
}

const CategoryGen = (props: any) => {
    let src: string | string[]
    if (props.img == 'shoes') {
        src = `/${props.img}.jpg`
    } else { src = `/${props.img}.webp` }
    return (
        <div className={styles["cards"]}>
            <Image className={styles.catImg} src={src} alt='category' width={props.width} height={props.height} layout='intrinsic' />
            <div className={styles["overlay"]}>
                <div className={styles["card_text"]} style={{'--color': `${props.color}`}} >
                    <span>{props.type}</span>
                </div>
            </div>
        </div>
    )
}

const Categories = () => {
    const img = ['ms', 'mn', 'wt', 'mt', 'at', 'shoes']
    const clr = ['#32de84', '#faafba', '#faafba', '#2a52be', '#aa336a', '#a64b2a']
    const type = ['Sale', 'New', 'Women', 'Men', 'Accessories', 'Shoes']
    const width=['310', '310', '310', '310', '310', '628']
    const height=['265.78', '265.78', '544.9', '265.78', '265.78', '430.6']
    return (
        <div className={`${styles['category']} ${styles['main']}`}>
            {img.map((el,i) => {
                return <CategoryGen key={i} img={el} color={clr[i]} type={type[i]} width={width[i]} height={height[i]} />
            })}
        </div>
    )
}

const ColorGen = (props: any) => {
    return (
        <div>
            <div className={`${styles["colors"]} FilterColors`} data-toggle="off" data-color={props.hexcode} style={{background: `${props.hexcode}`}} />
            <span className={`${styles["color-txt"]} ColorTxt`} data-color={props.color}></span>
        </div>
    )
}

const DropdownColor = () => {
    const colors = ["Red", "Green", "Yellow", "Blue", "Black", "White", "Orange", "Purple", "Pink", "Gray", "Brown", "Teal"]
    const hex = ["#ff404", "#4cbb17", "#ffef00", "#2a52be", "#000000", "#e8e8e8", "#fc6a03", "#7851a9", "#faafba", "#37474f", "#65350f", "#008080"]
    return (
        <div className={`${styles.dropdown} ${styles.color} Dropdowns`}>
            {colors.map((el,i) => {
                return <ColorGen key={i} color={el} hexcode={hex[i]} />
            })}
        </div>
    )
}

const CatGen = (props: any) => {
    let src = `/${props.image}.png`
    return (
        <div className={`FilterCategories ${styles["categories"]}`} data-type={props.category}>
            <Image src={src} alt={props.category} data-toggle="off" width={0} height={0} />
            <span className={`CatTxt ${styles["cat-txt"]}`} data-apparel={props.category} />
        </div>
    )
}

const DropdownCategory = () => {
    const category = ["Shirts & Tops", "Jeans & Leggings", "Jackets & Sweatshirts", "Accessories", "Shoes"]
    const img = ['tshirt', 'pants', 'jacket', 'accessories', 'shoes']
    return (
        <div className={`${styles.dropdown} ${styles.category} Dropdowns`} id="dropdown">
            {category.map((el,i) => {
                return <CatGen key={i} category={el} image={img[i]} />
            })}
        </div>
    )
}

export default function Home() {
    React.useEffect(() => {
        main()
    },[])
  return (
    <div className={styles.container}>
        <Head>
            <link rel = "icon" href = "/z.png" type = "image/x-icon" />
            <meta charSet="UTF-8" />
            <meta name="description" content="E-commerce Web App" />
            <meta name="keywords" content="Fashion, Commerce, Clothing" />
            <meta name="author" content="Deep" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
            <title>Zevon</title>
        </Head>

        {/* -----------------------------------PRELOADER-------------------------------------*/}

        {/* <div id="preloader" className={styles["preloader"]} style={{background: "#010125 url('/preloader.gif') no-repeat center center"}}>
            <div className={styles["z"]}>
                <Image src="/z.jpg" alt="z" width={0} height={0} />
            </div>
        </div> */}
      
        {/* -----------------------------------TITLE-------------------------------------*/}
      
        <div id="title" className={`${styles.title} ${styles.main}`} style={{backgroundImage: "url('/a7.jpg')"}}>
      
            {/* -----------------------------------NAVBAR-------------------------------------*/}
            <nav className = {styles.nav}>
                <div className={styles["nav-left"]}>
                    <li><a className= {styles.navl} href="#">Home</a></li>
                    <li><a className= {styles.navl} href="#">Blog</a></li>
                    <li><a className= {styles.navl} href="#">About</a></li>
                    <li><a className= {styles.navl} href="#">Contact</a></li>
                </div>
                <div className="nav-right">
                    <div className={styles["searchbox"]} id="searchbox">
                        <input type="search" placeholder="Search" />
                        <Image src="/search1.png" id="search-img" className={styles['search-img']} alt="search" data-toggle="off" width={32} height={32} layout='intrinsic' />
                    </div>
                    <div className={styles["navicons"]}>
                        <a className= {styles["navico"]} href="#"><Image className={styles.navimg} src="/wishlist.png" alt="wishlist" width={32} height={32} layout='intrinsic' /></a>
                        <a className= {styles["navico"]} href="#"><Image className={styles.navimg} src="/cart.png" alt="cart" width={32} height={32} layout='intrinsic' /></a>
                        <a href="#"><div className={styles.login}>Login</div></a>
                    </div>
                </div>
            </nav>
      
            <div className={styles["logo"]}><i>Zevon</i></div>
            <div className={styles["shopcont"]}>
                <a href="#cat-title-sep" className={styles["shopnow"]}>
                    <div className={styles.shopnowText}>Shop Now</div>
                </a>
            </div>
        </div>
      
        <div id="cat-title-sep" className={`${styles["divider"]} ${styles["cat-title-sep"]}`} />
      
        {/* -----------------------------------CATEGORIES-------------------------------------*/}
      
        <Categories />
        
        <div className={styles.divider} />
        
        {/* -----------------------------------PAGINATOR-------------------------------------*/}
        {/* <div className={styles["page"]}>
            <div className={`${styles.paginator} ${styles.main}`}>
                <div className={styles["filtercont"]} id="filtercont" data-toggle="off">
                    <Image id="filter" className={styles.filter }src="/filter1.png" alt="filter" width={0} height={0} />
                    <Image id="filterOff" className={styles.filteroff} src="/cancel.png" alt="cancel" width={0} height={0} />
                </div>
                <div>
                    <span id="prev" className={styles.prev}> {'<'} </span>
                    <span id="next" className={styles.next}> {'>'} </span>
                </div>
            </div>
            <menu className={styles["items-wrapper"]} id="items-wrapper">
                <section>
                    <div className={styles["item-cont-range"]} data-toggle="off" style={{display: "flex; flex-direction: column"}}>
                        <label htmlFor="price">Price Range</label>
                        <input type="range" className={`${styles.menu} ${styles.price}`} min="500" max="5000" />
                    </div>
                    <div className={styles["item-cont"]} id="items-cont" data-toggle="off">
                        <span className={styles["menu"]} data-type="color">Color</span>
                    </div>
                    <div className={styles["item-cont"]} id="items-cont" data-toggle="off">
                        <span className={styles["menu"]} data-type="category">Category</span>
                    </div>
                </section>
                <section>
                    <DropdownColor />
                    <DropdownCategory />
                </section>
            </menu>
        </div> */}
      
        {/* -----------------------------------SHOP-------------------------------------*/}

        <Blog />
        
        <CardCont1 />
        
        <CardCont2 />

        <div className={styles.divider} />

        {/*-----------------------------------FOOTER-------------------------------------*/}

        <footer className={`${styles['main']} ${styles['footer']}`}>
            <section id="contact" className={styles.contact}>
                <div id="footlogo" className={styles.footlogo}><h2>Zevon</h2></div><br />
                <div id="contact_number" className={styles['contact_number']}>
                    <Image src="/icon-phone.svg" alt="phone" width={0} height={0} />
                    <span>Phone: +1-543-123-4567</span>
                </div>
                <div id="contact_email" className={styles['contact_email']}>
                    <Image src="/icon-email.svg" alt="email" width={0} height={0} />
                    <span>Email: zevon@gmail.com</span>
                </div>
                <br />
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginLeft: "-0.75rem"}}>
                    <a href="#"><Image className={styles["contact_ico"]} src="/f.svg" alt="facebook" width={0} height={0} /></a>
                    <a href="#"><Image className={styles["contact_ico"]} src="/i.svg" alt="insta" width={0} height={0} /></a>
                    <a href="#"><Image className={styles["contact_ico"]} src="/t.svg" alt="twitter" width={0} height={0} /></a>
                    <a href="#"><Image className={styles["contact_ico"]} src="/l.svg" alt="linkedin" width={0} height={0} /></a>
                </div>
            </section>
            <section id="newsletter" className={styles["newsletter"]} >
                <h1 style={{margin: "0"}}>NEWSLETTER</h1>
                <p style={{fontSize: "1rem"}}>
                    To receieve your weekly fashion tips, <br />
                    sign up to our weekly newsletter. We'll never send <br />
                    you spam or pass on your eamil address
                </p><br />
                <form>
                    <input type="email" id="email" className={styles["email"]} name="email" placeholder="example@gmail.com" />
                    <input type="submit" value="Subscribe" id="submit" className={styles["submit"]} />
                </form>
            </section>
        </footer>
    </div>
  )
}
