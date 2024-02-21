import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate();
  return (
    <div id="login" className="row justify-content-center p-5">
        <div class="col-lg-10 bg-dark d-flex flex-column align-items-start p-5">
              
            <div class="heading-section">
                <h4>Administration</h4>
            </div>
            <div className="d-flex flex-column align-items-start">
                <div className="order-height">
                <h5>Orders</h5>
                </div>
                <div className="order-height" onClick={() => navigate("/product-admin")}>
                <h5>Products</h5>
                </div>
                
            </div>

                
                
                
              
            </div>
    </div>
  )
}

export default Admin