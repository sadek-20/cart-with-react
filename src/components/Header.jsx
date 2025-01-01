import React from 'react'
import { Link } from 'react-router-dom'
import useShop from '../ShopContext'

function Header() {
const {cart}  = useShop()
  return (
    <div className='menu'>
        <Link to= {'/'} className='logo'>IRKUSH</Link>
        <div className="menu-items">
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
            <Link to={'/contact'}>contact</Link>
            <Link to={'/cart'}>cart</Link>
        </div>
        <Link to={'/cart'}>
        <span className='cart'>{cart.length}</span>
        </Link>
    </div>
  )
}

export default Header