import styles from "./Navbar.module.css"
import { CartWidget } from '../cart/CartWidget'
import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <>
           <header> 
            <h4 className={styles.title}>Tienda</h4>
            <nav className={styles.navContainer}>
                <Link to= '/'>inicio</Link>
                <Link to= '/category/polera'>poleras</Link>
                <Link to='/category/taza'>Tazas</Link>
                
                <CartWidget />
            </nav>
            </header>
        </>
    )

}
