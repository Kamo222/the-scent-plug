import React from 'react'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {
    const navigate = useNavigate();

  return (
    <div id="login" className="row justify-content-center ">
        <div class="col-lg-4 bg-dark">
              <div class="top-downloaded p-3 ">
                <div class="heading-section">
                  <h4>Enter your details</h4>
                </div>

                <div className="d-flex flex-column ">
                    <input className="p-2 w-80 mb-3 " type="email" placeholder="Full Name"/>
                    <input className="p-2 w-80 mb-3 " type="tel" placeholder="Phone Number"/>
                    <p>Delivary Address</p>
                    <input className="p-2 w-80 mb-3 " type="number" placeholder="House Number"/>
                    <input className="p-2 w-80 mb-3 " type="text" placeholder="Flat/Estate/Complex Name"/>
                    <input className="p-2 w-80 mb-3 " type="text" placeholder="Street Name"/>
                    <input className="p-2 w-80 mb-3 " type="text" placeholder="Suburb"/>
                    <input className="p-2 w-80 mb-3 " type="text" placeholder="City"/>
                    <input className="p-2 w-80 mb-3 " type="number" placeholder="Postal Code"/>
                </div>
                <div className="s">
                    <button>Submit</button>

                    <span className="text-light mx-5" onClick={() => navigate("/home")}>Fill in Later</span>
                </div>
                
              </div>
            </div>
    </div>
  )
}

export default Onboarding