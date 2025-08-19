import React, {  useState } from 'react'


function UserCart() {
 const [cart, setCart] = useState([])

  function addToCart (){
    setCart([...cart, product])
  }
  function removeFromCart(id) {
    setCart(cart,fiter(item => item.id !== id))
  }

  function clearCart(){
    setCart([])
  }

  return {cart, addToCart, removeFromCart, clearCart};
}

export default UserCart