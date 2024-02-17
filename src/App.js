
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductPage from './Components/ProductPage';
import Login from './Components/Login';
import { Link, Redirect, Navigate } from 'react-router-dom';
import { Routes, Route, Switch } from 'react-router-dom';
import { StateContext } from './Components/State/context';
import { useContext, useEffect } from 'react';
import Signup from './Components/Signup';
import Onboarding from './Components/Onboarding';
import Profile from './Components/Profile';
import Admin from './Components/Admin';

function App() {

  

  const { setInitialState, setIsLoggedIn } = useContext(StateContext);
  const data = {
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
  }

  useEffect(() => {
    if(window.localStorage.getItem('state')){
      setInitialState(JSON.parse(window.localStorage.getItem('state')))
      console.log("Did fetch state");
    } else {
      setInitialState(data);
    }
  }, [])

  useEffect(() => {
    if(localStorage.getItem("isLoggedInToSP")){
      setIsLoggedIn(localStorage.getItem("isLoggedInToSP"));
    }
  }, [])

  return (
    <div className="App">

{/* <!-- ***** Preloader Start ***** --> */}
      {/* <div id="js-preloader" class="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}
      {/* <!-- ***** Preloader End ***** --> */}

      {/* <!-- ***** Header Area Start ***** --> */}
      
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="product/:id" element={<ProductPage />}/>
        <Route path="/onboarding" element={<Onboarding />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/admin" element={<Admin />}/>
        {/* <Route path="/987987987" element={<Header />}/> */}
      </Routes>
      {/* <!-- ***** Header Area End ***** --> */}
      
      

      
    </div>
  );
}

export default App;
