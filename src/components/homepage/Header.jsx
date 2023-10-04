import '../../css/header.css'

import Cart from "./header/Cart"
import Login from "./header/LoginDialogue"
import Search from "./header/Search"

import logo from '../../assets/logo.png'
import { useState } from 'react'








const Header = ()=>{
    const [loginFlag,setLoginFlag]= useState(false)
    return (
        <div className="header-container">
            <div>
                <img src={logo} alt="logo" width="120px" height="50"/>
            </div>
            <div><Search /></div>
            <button onClick={()=>setLoginFlag(prev=>!prev)}>Login</button>
            <div><Cart /></div>

            {loginFlag ? <Login />:''}
           
        </div>


    )

}


export default Header