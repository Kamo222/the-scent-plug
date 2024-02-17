import React, { useContext } from 'react';
import logo from '../assets/images/scentpluglogo.png';
import { Link ,NavLink, useNavigate } from 'react-router-dom';
import { StateContext } from './State/context';
import { auth, signOut } from './firebase';

const Header = () => {

  const { user, setIsLoggedIn, isLoggedIn } = useContext(StateContext);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
    .then(() => {
      navigate("/home");
      setIsLoggedIn(false);
    })
    .catch((error) => {
      alert(error);
    })
  }

  return (
    <>
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav justify-content-center">
                        {/* <!-- ***** Logo Start ***** --> */}
                        
                        <NavLink to="/home" className="logo">
                          <img src={logo} alt="" />
                        </NavLink>
                        {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Search End ***** --> */}
                        <div className="search-input">
                          <form id="search" action="#">
                            <input type="text" placeholder="Search" id='searchText' name="searchKeyword" onkeypress="handle" />
                            <i className="fa fa-search"></i>
                          </form>
                        </div>
                        {/* <!-- ***** Search End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                        <div className="col-5 px-5 pb-3 d-flex align-items-center">
                        <Link  to="/home" >
                          <span className="active mx-4 ">Home</span>
                        </Link>
                        <Link to="/home" >
                          <span  className="active mx-4">Catalog</span>
                        </Link>
                        <Link to="/home" >
                          <span  className="active mx-4">Contact us</span>
                        </Link>
                            {/* <li><a href="index.html" className="active">Home</a></li>
                            <li><a href="browse.html">Catalog</a></li>
                            <li><a href="details.html">Details</a></li>
                            <li><a href="streams.html">Streams</a></li>
                            <li><a href="profile.html">Profile <img src="./assets/images/profile-header.jpg" alt="" /></a></li> */}
                        </div>

                        
                  
                        <span id="basket-icon" class="material-symbols-outlined" >
                          shopping_basket
                        </span>
                        <span id="basket-counter">{user.basket.reduce((accumilater) => accumilater + 1, 0)}</span>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <NavLink to={isLoggedIn ? "/profile" :"/login"}>
                          <span id="basket-icon" class="material-symbols-outlined">
                            account_circle
                          </span>
                        </NavLink>
                        {isLoggedIn && <span className="text-light pt-2 " style={{marginLeft: "20px", width: "100px"}} onClick={logout}>Sign Out</span>}
                        
                        {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header