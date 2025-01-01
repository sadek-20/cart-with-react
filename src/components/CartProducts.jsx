import React from 'react';
import useShop from '../ShopContext';

function CartProducts() {
    const { cart, removeFromCart, updateQuantity, total } = useShop();

    const handleIncrease = (product) => {
        updateQuantity(product.id, product.quantity + 1);
    };

    const handleDecrease = (product) => {
        if (product.quantity > 1) {
            updateQuantity(product.id, product.quantity - 1);
        } else {
            removeFromCart(product);
        }
    };

    

    return (
        <div className='cart-products'>
            <h2>Cart Products</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((product) => (
                    <div className='cart-product' key={product.id}>
                        <div className="cart-title">
                            <img src={product.imageUrl} alt={product.name} />
                            <span>{product.name}</span>
                        </div>
                        <span>${product.price}</span>
                        <div className="quantity-controls">
                            <button className='btn-decrease' onClick={() => handleDecrease(product)}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => handleIncrease(product)}>+</button>
                        </div>
                        <button className='btn-remove' onClick={() => removeFromCart(product)}>x</button>
                    </div>
                ))
            )}
            <div className="total-price">
                <h2>Total Price: ${total}</h2>
            </div>
        </div>
    );
}

export default CartProducts;