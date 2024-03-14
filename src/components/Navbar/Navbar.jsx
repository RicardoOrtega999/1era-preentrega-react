import styles from "./Navbar.module.css"
import { CartWidget } from '../cart/CartWidget'
import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <>
           <header> 
            <h4 className={styles.title}>Tienda</h4>
            <nav className={styles.navContainer}>
                <Link to= '/category/celular'>celulares</Link>
                <Link to='/category/tablet'>Tablets</Link>
                <Link to='/category/notebook'>Notebooks</Link>
                <CartWidget />
            </nav>
            </header>
        </>
    )

}
