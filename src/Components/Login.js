import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth ,signInWithEmailAndPassword } from './firebase';
import { StateContext } from './State/context';

const Login = () => {

    const [email, setEmail]  = useState();
    const [password, setPassword] = useState();

    const { setIsLoggedIn } = useContext(StateContext);
    const navigate = useNavigate();
    

    const login = () => {
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials);
            setIsLoggedIn(true);
            navigate("/home");
            localStorage.setItem("isLoggedInToSP", true);
            localStorage.setItem("userCredentials", userCredentials);

        })
        .catch((error) => {
            alert(error);
        })
       
        
    }

  return (
    <div id="login" className="row justify-content-center ">
        <div class="col-lg-4 bg-dark">
              <div class="top-downloaded p-5 ">
                <div class="heading-section">
                  <h4>Login</h4>
                </div>

                <div className="d-flex flex-column ">
                    <input onChange={(event) => setEmail(event.target.value)} className="p-2 w-80 mb-3 " type="email" placeholder="Enter your email"/>
                    <input onChange={(event) => setPassword(event.target.value)} className="p-2 w-80 mb-3 " type="password" placeholder="Enter your password"/>
                </div>
                <Link to={"/signup"}>
                    <div class="text-button">
                    <p className="text-light">Don't have an account? Sign-up</p>
                    </div>
                </Link>
                
                <button onClick={login} >Login</button>
              </div>
            </div>
    </div>
  )
}

export default Login