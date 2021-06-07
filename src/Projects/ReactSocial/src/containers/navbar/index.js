import React,{useState , useContext} from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user'
import './style.css'


export default function Navbar() {

   const [user, setUser] = useContext(UserContext).user;
   

    return (
        
        <div className="loginContainer">
        <div className = "navbar">
            <p>Social App</p>
            

            {/* {user ? <img className="navbar_img" src={user.photoURL} />: <SignInBtn/>} */}
        </div>
        </div>
        
    )
}
