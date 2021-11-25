import { observer } from "mobx-react-lite";
import React, {FC, useContext, useEffect, useState} from "react";
import { Context } from "..";
import '../styles/HeaderMain.css'
import $api from '../http/index'



const HeaderMain: FC<any> = (props) =>{
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

    const fff = () =>{
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
    const fff2 = () =>{
        FB.logout(async (response: fb.StatusResponse) => {
            props.setDataFacebook({})

        });
    }
    
    return(
        <header className='mainHeader'>
            <div className="mainHeader__info">
                {props.email}
            </div>
            {props.dataFacebook.isAuth ?
            <button onClick={fff2} >logout</button>:
            <button onClick={fff} >login</button>}
            
        </header>
    )
}

export default HeaderMain