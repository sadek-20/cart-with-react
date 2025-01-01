import React from 'react'
import Product from './Product'

const products = [
    { id: 1, name: 'Product 1', price: 100 , quantity : 1 ,imageUrl: 'https://images.pexels.com/photos/9953654/pexels-photo-9953654.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 2, name: 'Product 2', price: 200 , quantity : 2 , imageUrl:  'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    { id: 3, name: 'Product 3', price: 300 , quantity : 3 , imageUrl: 'https://images.pexels.com/photos/39239/pendulum-cone-chain-gold-39239.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 4, name: 'Product 4', price: 400 , quantity : 4 , imageUrl: 'https://images.pexels.com/photos/1391994/pexels-photo-1391994.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 5, name: 'Product 5', price: 500 , quantity : 5 , imageUrl: 'https://images.pexels.com/photos/1606367/pexels-photo-1606367.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 6, name: 'Product 6', price: 600 , quantity : 6 , imageUrl: 'https://images.pexels.com/photos/1793514/pexels-photo-1793514.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 7, name: 'Product 7', price: 700 , quantity : 7 , imageUrl: 'https://images.pexels.com/photos/1281047/pexels-photo-1281047.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 8, name: 'Product 8', price: 800 , quantity : 8 , imageUrl: 'https://images.pexels.com/photos/1050852/pexels-photo-1050852.jpeg?auto=compress&cs=tinysrgb&w=600'},

    { id: 9, name: 'Product 9', price: 900 , quantity : 9 , imageUrl: 'https://images.pexels.com/photos/1330752/pexels-photo-1330752.jpeg?auto=compress&cs=tinysrgb&w=600'}  
]

function Products() {
  return (
    <div className='grid'>
        {
            products.map(product => (

                <Product key={product.id} {...product}/>
                
              
            )) // end of map() function  //
        }
    </div>
  )
}

export default Products