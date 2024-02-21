import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { createUserWithEmailAndPassword, auth, addDoc, collection, database } from './firebase';
import { StateContext } from "./State/context"

const Signup = () => {

    const { setIsLoggedIn, getUser, setUserInitialState } = useContext(StateContext);

    const [email, setEmail]  = useState();
    const [password, setPassword] = useState();
    const [confirmedPassword, setConfirmedPassword] = useState();
    const navigate = useNavigate();

    const newUser = async (uid, email) => {
        const col = collection(database, "users");
        const colBasket = collection(database, "baskets")

        await addDoc(col, {
            uid: uid,
            fullName: "",
            phoneNumber: null,
            email: email,
            houseNumber: null,
            complexName: "",
            streetName: "",
            suburb: "",
            city: "",
            postalCode: null
        }).then((res) => {
            console.log("User created", res)
        }).catch((error) => {
            console.log(error);
        })

        await addDoc(colBasket, {
            uid: uid,
            items: []
        }).then((res) => {
            console.log("Basket created", res)
        }).catch((error) => {
            console.log(error);
        })
    }

    const signup = () => {
        if(password === confirmedPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials);
                localStorage.setItem("isLoggedInToSP", true);
                
                navigate("/onboarding");
                newUser(userCredentials.user.uid, userCredentials.user.email);
                setUserInitialState(getUser(userCredentials.user.uid));
                localStorage.setItem("user", getUser(userCredentials.user.uid));
            })
            .catch((error) => {
                alert(error);
            })
        } else {
            alert("passwords dont match")
        }


        
    }

  return (
    <div id="login" className="row justify-content-center ">
        <div class="col-lg-4 bg-dark">
              <div class="top-downloaded p-5 ">
                <div class="heading-section">
                  <h4>Sign-up</h4>
                </div>

                <div className="d-flex flex-column ">
                    <input onChange={(event) => setEmail(event.target.value)} className="p-2 w-80 mb-3 " type="email" placeholder="Enter your email"/>
                    <input onChange={(event) => setPassword(event.target.value)} className="p-2 w-80 mb-3 " type="password" placeholder="Enter your password"/>
                    <input onChange={(event) => setConfirmedPassword(event.target.value)} className="p-2 w-80 mb-3 " type="password" placeholder="Confirm password"/>
                </div>
                { (password !== confirmedPassword) && <p>passwords dont match</p>}
                <Link to={"/login"}>
                    <div class="text-button">
                    <p className="text-light">Already have an account? Login</p>
                    </div>
                </Link>
                
                <button onClick={signup}>Sign-up</button>
              </div>
            </div>
    </div>
  )
}

export default Signup