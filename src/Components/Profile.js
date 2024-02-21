import React, { useContext } from 'react';
import { StateContext } from './State/context';

const Profile = () => {

    const {user} = useContext(StateContext)
  return (
    <div id="login" className="row justify-content-center p-5">
        <div class="col-lg-10 bg-dark d-flex flex-column align-items-start p-5">
              
            <div class="heading-section">
                <h4>Profile</h4>
            </div>
            <div className="d-flex flex-column align-items-start">
                <h5>Details</h5>
                <p>Name: {user.fullName}</p>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                <h6>Address</h6>
                <p>{user.houseNUmber} {user.streetName}</p>
                <p>{user.suburb}</p>
                <p>{user.city}</p>
                <p>{user.postalCode}</p>
                <h5>Orders</h5>
            </div>

                
                
                
              
            </div>
    </div>
  )
}

export default Profile