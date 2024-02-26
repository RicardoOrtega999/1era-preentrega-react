import styles from "./Navbar.module.css"
import { CartWidget } from '../cart/CartWidget'
export const Navbar = () => {
    return (
        <>
           <header> 
            <h4 className={styles.title}>Tienda</h4>
            <nav className={styles.navContainer}>
                <a href="">producto 1</a>
                <a href="">producto 2</a>
                <a href="">producto 3</a>
                <CartWidget />
            </nav>
            </header>
        </>
    )

}
