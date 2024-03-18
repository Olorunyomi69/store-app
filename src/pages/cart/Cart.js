import React, {useContext} from 'react';
import { PRODUCTS } from "../../components/Products";
import { ShopContext } from "../../context/shopContextProvider";
import CartItem from '../CartItem';
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate()
 if (totalAmount > 0) {
   return (
 <div className='cart'>
 
 <div className='ordered-items'>
       <div>
         <h1>Your Cart Items</h1>
       </div>
       <div className='cartItems'>
         {
           PRODUCTS.map((product) => {
             if (cartItems[product.id] !== 0) {
               return <CartItem data = {product}/>
             }
             return null;
           })
         }
       </div>
     </div>
 <div className='checkout'>
 <h1>Cart Summary</h1>
 <p>Subtotal : ${totalAmount}</p>
 <button>Checkout</button>
 <button onClick={() => navigate("/")}>Continue Shopping</button>
 </div>
 
   
 
     
 </div>
   )

 } else{
  return(
    <div className='emptycart'>
      <svg class="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
      <p>Your Cart is Empty</p>
      <button  onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
  )
 }
}

export default Cart


