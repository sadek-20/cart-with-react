import React from 'react'
import CartProducts from '../components/CartProducts'
import Payments from '../components/Payments'

function Cart() {
  return (
    <div className='component'>
      <CartProducts/>
      <Payments/>
    </div>
  )
}

export default Cart