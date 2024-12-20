import React, {createContext, useState}from 'react'
import all_product from '../components/assets/all_product';

//created a shop context
export const ShopContext = createContext(null);


const getDefaultProduct = () => {

    let cart = {};
    for(let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0;
    }
     return cart;
}


const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultProduct());
   
 
    const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
      console.log("cart pressed", cartItems);
      
    }

     
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for(const item in cartItems){
          if(cartItems[item] > 0){
            let cartInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += cartInfo.new_price * cartItems[item];
          }
        }
         return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItems += cartItems[item];
            }
        }
         return totalItems;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};
    
    return(
        <ShopContext.Provider value = {contextValue} >
         {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;