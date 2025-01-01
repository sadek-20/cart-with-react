import React, { useEffect, useState } from 'react';
import useShop from '../ShopContext';

const Product = (product)=>{
    const {addToCart , removeFromCart , cart}=useShop()
    const[isCart , setIsCart]=useState()

    const handleClick=()=>{
      if(isCart){
        removeFromCart(product);
      } else {
        addToCart(product)
      }
    };

    useEffect(()=>{
      const isInCart= cart.filter(pro => pro.id === product.id);
      if(isInCart.length > 0){
        setIsCart(true)
      }
      else{
        setIsCart(false)
      }
    },[cart , product])
 
    return (
    <div className='card'
        style={{minHeight : '100%',
       background: `linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1)),
       url(${product.imageUrl}) `,
       backgroundRepeat : 'no-repeat',
       backgroundSize : 'cover',
       backgroundPosition : 'center',
       cursor : 'pointer',
     }}>
     <div className='info'> <span>{product.name}</span>
      <span>{product.price}</span>
      
      </div>
      <button className={`btn ${isCart ? 'btn-secondary' : 'btn-primary'}`} 
      onClick={()=>{handleClick()}}>{isCart ? '-' : '+'}</button>
    </div>
        );
    
}


export default Product;