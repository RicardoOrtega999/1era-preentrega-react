import classes from './CartWidget.module.css'
import { PiShoppingCartBold } from "react-icons/pi";

export const CartWidget = () => {
    return (
   <div className={classes.container}>
      <PiShoppingCartBold className={classes.carrito} />
      <div className={classes.numero}>
          <span>0</span>
      </div>
   </div>
    )
  }