import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContext } from './State/context';

const Onboarding = () => {
    const {user, updateUser, getUser, isLoggedIn } = useContext(StateContext)
    const navigate = useNavigate();

    const [ fullName, setFullName ] = useState(user.fullName);
    const [ phoneNumber, setPhoneNumber ] = useState(user.phoneNumber);

    const [ houseNumber, setHouseNumber ] = useState(user.houseNumber);
    const [ complexName, setComplexName ] = useState(user.complexName);
    const [ streetName, setStreetName ] = useState(user.streetName);
    const [ suburb, setSuburb ] = useState(user.suburb);
    const [ city, setCity ] = useState(user.city);
    const [ postalCode, setPostalCode ] = useState(user.postalCode);

    const details = {fullName, phoneNumber, houseNumber, complexName, streetName, suburb, city, postalCode};

    const updateUserHandler = () => {
      // setDetails(details)
      console.log("clicked")
      updateUser(user.uid, details);
      getUser(user.uid)
      navigate("/home");
      
    }

  return (
    <div id="login" className="row justify-content-center ">
        <div class="col-lg-4 bg-dark">
              <div class="top-downloaded p-3 ">
                <div class="heading-section">
                  <h4>Enter your details</h4>
                </div>

                <div className="d-flex flex-column ">
                    <input onChange={(event) => setFullName(event.target.value)} className="p-2 w-80 mb-3 " type="email" placeholder="Full Name" defaultValue={ isLoggedIn ? user.fullName : ""}/>
                    <input onChange={(event) => setPhoneNumber(event.target.value)} className="p-2 w-80 mb-3 " type="tel" placeholder="Phone Number" defaultValue={ isLoggedIn ? user.phoneNumber : ""}/>
                    <p>Delivary Address</p>
                    <input onChange={(event) => setHouseNumber(event.target.value)} className="p-2 w-80 mb-3 " type="number" placeholder="House Number" defaultValue={ isLoggedIn ? user.houseNumber : ""}/>
                    <input onChange={(event) => setComplexName(event.target.value)} className="p-2 w-80 mb-3 " type="text" placeholder="Flat/Estate/Complex Name" defaultValue={ isLoggedIn ? user.complexName : ""}/>
                    <input onChange={(event) => setStreetName(event.target.value)} className="p-2 w-80 mb-3 " type="text" placeholder="Street Name" defaultValue={ isLoggedIn ? user.streetName : ""}/>
                    <input onChange={(event) => setSuburb(event.target.value)} className="p-2 w-80 mb-3 " type="text" placeholder="Suburb" defaultValue={ isLoggedIn ? user.suburb : ""}/>
                    <input onChange={(event) => setCity(event.target.value)} className="p-2 w-80 mb-3 " type="text" placeholder="City" defaultValue={ isLoggedIn ? user.city : ""}/>
                    <input onChange={(event) => setPostalCode(event.target.value)} className="p-2 w-80 mb-3 " type="number" placeholder="Postal Code" defaultValue={ isLoggedIn ? user.postalCode : ""}/>
                </div>
                <div className="s">
                    <button onClick={updateUserHandler}>Submit</button>

                    <span className="text-light mx-5" onClick={() => navigate("/home")}>Fill in Later</span>
                </div>
                
              </div>
            </div>
    </div>
  )
}

export default Onboarding