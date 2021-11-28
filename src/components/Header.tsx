import { observer } from "mobx-react-lite";
import React, {FC, useContext, useEffect, useState} from "react";
import { Context } from "..";
import '../styles/Header.css'
import $api from '../http/index'



const Header: FC<any> = (props) =>{
    window.fbAsyncInit = function() {
    };



    // useEffect(()=>{

    //     FB.init({
    //         appId: '454732159123529',
    //         version: 'v11.0',
    //         status: true,
    //         cookie: true,
    //         xfbml: true,
    //         autoLogAppEvents: false
    //     });
    //     FB.getLoginStatus(async(response:fb.StatusResponse) =>{

    //         if(response.status == "connected"){
    //             props.setDataFacebook({
    //                 isAuth: true,
    //                 token: response.authResponse.accessToken
    //             })
    //         }
    //     })
    //   },[])

    const login = () =>{
        FB.login(async (response: fb.StatusResponse) => {
            console.log(response);
            console.log(response.status);
            console.log(response.authResponse.accessToken);
            if(response.authResponse.accessToken){
                props.setDataFacebook({
                    isAuth: true,
                    token: response.authResponse.accessToken
                })
            }
        });
    }
    const logout = () =>{
        FB.logout(async (response: fb.StatusResponse) => {
            props.setDataFacebook({})

        });
    }


    
    return(
        <header className='header__main'>
            <div className="header__main__wrapper">
                    <div className="header__facebook-button">
                        <img className="img-facebook" src="./facebook.svg" alt="" />
                        Connect with Facebook
                    </div>
                    <div className="header__info">
                        {props.email}
                    </div>

            </div>

            {/* {props.dataFacebook.isAuth ?
            <button onClick={fff2} >logout</button>:
            <button onClick={fff} >login</button>} */}
            
        </header>
    )
}

export default Header