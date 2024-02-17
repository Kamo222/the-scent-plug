import React, { useReducer } from 'react'
import { StateContext } from './context'
import { StateReducer } from './reducer'
import { useState } from 'react'

const State = (props) => {

  

  const [initialState, setInitialState] = useState({
    user: {
      uid: "",
      email: "",
      phoneNumeber: "",
      orders: [],
      basket: [{name: "coco"},{ name: "blue ice"}],
      address: {
        streetAddress: "",
        suburb: "",
        city: "",
        zipcode: ""
      }
    },
    products: [
      {
        productId: "1",
        name: "Coco chanel",
        description: "This is a very cool perfume",
        image: "http://localhost:3000/static/media/perfume.f2225b8f9e3393a9ae6a.jpg",
        rating: 3,
        reviews: [],
        quantity: 5,
        instock: true,
        price: 2000
      },
      {
        productId: "2",
        name: "Lady Million",
        description: "This is a very cool perfume, cooler than the first one",
        image: "http://localhost:3000/static/media/perfume.f2225b8f9e3393a9ae6a.jpg",
        rating: 3,
        reviews: [],
        quantity: 5,
        instock: true,
        price: 1300
      }
    ]
  })

  const [state, dispatch] = useReducer(StateReducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const addToCart = (product) => {
    console.log(" Added to cart");
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    })
  }

  return (
    <StateContext.Provider value={{
      user: state.user,
      products: state.products,
      scrollToTop,
      addToCart,
      setInitialState,
      isLoggedIn,
      setIsLoggedIn
      
    }}>
      {props.children}
    </StateContext.Provider>
  )
}

export default State