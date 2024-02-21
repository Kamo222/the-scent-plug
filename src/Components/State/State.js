import React, { useReducer } from 'react'
import { StateContext } from './context'
import { StateReducer } from './reducer'
import { useState } from 'react'
import { productReducer } from './productReducer'
import { userReducer } from './userReducer'
import { cartReducer } from './cartReducer'
import { getDocs, database, collection, getDoc, doc, query, where, setDoc } from '../firebase';

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
        id: "1",
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
        id: "2",
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

  const [productInitialState, setProductInitialState] = useState([]);

  const [userInitialState, setUserInitialState] = useState(JSON.parse(localStorage.getItem("finalUser")) ? JSON.parse(localStorage.getItem("finalUser")) : {});

  const [cartInitialState, setCartInitialState] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : {});

  const [state, dispatch] = useReducer(StateReducer, initialState);
  const [products, productsDispatch ] = useReducer(productReducer, productInitialState);
  const [ user, userDispatch ] = useReducer(userReducer, userInitialState);
  const [ cart, cartDispatch ] = useReducer(cartReducer, cartInitialState);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [ reload, setReload ] = useState(false);
  const [ firebaseId, setFirebaseId ] = useState("");
  const [ details, setDetails ] = useState({});
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const getProducts = async () => {
    const col = collection(database, "products");
    const data = await getDocs(col)
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
  }

  const getUser = async (uid) => {
    const userQuery = query(collection(database, "users"), where("uid", "==", uid));
    const fetchedUser = await getDocs(userQuery);
    const userResult = fetchedUser.docs.map((doc) => doc.data())
    window.localStorage.setItem("finalUser", JSON.stringify(userResult[0]));
    userDispatch({
      type: "LOAD_USER",
      payload: userResult[0]
    })
    setUserInitialState(userResult[0]);
    return userResult[0];
  }

  const getBasket = async (uid) => {
    const basketQuery = query(collection(database, "baskets"), where("uid", "==", uid));
    const fetchedBasket = await getDocs(collection(database, "baskets"));
    const basketResult = fetchedBasket.docs.map((doc) => doc.data()).filter((basket) => basket.uid === uid)
    window.localStorage.setItem("cart", JSON.stringify(basketResult[0]));
    console.log(basketResult[0])
    
    console.log("cart cart", cart);
    return basketResult[0];
  }

  const addToCart = (product) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product
    })
  }

  const updateUser = async (uid, details) => {
    const userQuery = query(collection(database, "users"), where("uid", "==", uid));
    const fetchedUser = await getDocs(userQuery);
    
    const userResult = fetchedUser.docs.map((doc) => {
      return doc.id;
    })

    console.log(details)
    const userRef = doc(database, "users", userResult[0]);
    setDoc(userRef, {
      fullName: details.fullName,
      phoneNumber: details.phoneNumber,
      houseNumber: details.houseNumber,
      complexName: details.complexName,
      streetName: details.streetName,
      suburb: details.suburb,
      city: details.city,
      postalCode: details.postalCode,
      uid: uid,
      email: user.email
    })
  }

  const updateProducts = (fetchedProducts) => {
    productsDispatch({
      type: "UPDATE_PRODUCTS",
      payload: fetchedProducts
    })
  }

  return (
    <StateContext.Provider value={{
      user,
      products,
      cart,
      scrollToTop,
      addToCart,
      setInitialState,
      isLoggedIn,
      setIsLoggedIn,
      setProductInitialState,
      updateProducts,
      getProducts,
      reload,
      setReload,
      setCartInitialState,
      getUser,
      setUserInitialState,
      getBasket,
      updateUser,
      details,
      setDetails
    }}>
      {props.children}
    </StateContext.Provider>
  )
}

export default State