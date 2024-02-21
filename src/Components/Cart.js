import React, { useContext } from "react";
import { StateContext } from "./State/context";

const Cart = () => {
    const { user, cart, saveCart } = useContext(StateContext);
    const { items } = cart;
    
    const saveCartHandler =  () => {
        saveCart(user.uid, cart);
    }

  return (
    <div class="game-details" style={{marginTop: 50}}>
      <div class="row">
        <div class="col-lg-12">
          <h2>Your Cart</h2>
        </div>
        <div class="col-lg-12 " >
          <div class="content">
            <div class="row">
              <div class="col-lg-4 ">
                <div class="left-info col-height">
                  <div class="left d-flex flex-column align-items-start ">
                    <h3>{user.fullName}</h3>
                    <h4>{user.email}</h4>
                    <h4>{user.phoneNumber}</h4>
                    <span>{user.houseNumber + " " + user.streetName}</span>
                    <span>{user.suburb}</span>
                    <span>{user.city}</span>
                    <span>{user.postalCode}</span>
                  </div>
                  
                </div>
              </div>
              <div class="col-lg-5  ">
                <div class="right-info col-height d-flex flex-column scroll">
                    
                    {
                        items.map((item) => {
                            return (
                                <div className="bg-light mb-3 d-flex align-items-start justify-content-between px-5 ">
                                    <span>{item.name}</span>
                                    <span>{item.price}</span>
                                </div>
                            )
                        })
                    }
                  
                </div>
                
              </div>
              <div class="col-lg-3">
                <div className="right-info col-height d-flex flex-column justify-content-center ">
                  <h2>{"R" + items.reduce((accumilator, item) => accumilator + parseInt(item.price), 0)}</h2>
                  <button onClick={saveCartHandler} className="mb-4 ">Save Cart</button>
                  <button>Checkout</button>
                </div>
                
              </div>
              
              <div class="col-lg-12">
                <p>
                  Cyborg Gaming is free HTML CSS website template provided by
                  TemplateMo. This is Bootstrap v5.2.0 layout. You can make a{" "}
                  <a href="https://paypal.me/templatemo" target="_blank">
                    small contribution via PayPal
                  </a>{" "}
                  to info [at] templatemo.com and thank you for supporting. If
                  you want to get the PSD source files, please contact us. Lorem
                  ipsum dolor sit consectetur es dispic dipiscingei elit, sed
                  doers eiusmod lisum hored tempor.
                </p>
              </div>
              <div class="col-lg-12">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
