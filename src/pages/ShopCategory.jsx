import React, {useContext} from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext' ;

export const ShopCategory = (prop) => {

  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={prop.banner} alt=''/>
     </div>
  )
}  
