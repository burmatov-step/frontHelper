import { observer } from "mobx-react-lite";
import React, {FC, useContext, useEffect, useState} from "react";
import { Context } from "..";
import '../styles/Header.css'
import $api from '../http/index'


const Header: FC<any> = (props) =>{
    const {store} = useContext(Context);
    window.fbAsyncInit = function() {
    };
    const saveTokenFb = async (userId: any, tokenFb: any, userIdFb: any) =>{
        const response: any = await $api.post('/createToken', {userId, tokenFb, userIdFb})
        console.log(response)
    }

    const checkFbAccount = async(userId: any, token: any, userIdFb: any) =>{
        const response: any = await $api.post('/check', {userId, token, userIdFb})
        if(response.status == 200){
            store.setallUsersInsta(response.data)
        }
    }

    useEffect(()=>{

        FB.init({
            appId: '454732159123529',
            version: 'v11.0',
            status: true,
            cookie: true,
            xfbml: true,
            autoLogAppEvents: false
        });
        FB.getLoginStatus(async(response:fb.StatusResponse) =>{
            console.log(response)
            if(response.status == "connected"){
                console.log(response)
                props.setDataFacebook({
                    isAuth: true,
                    token: response.authResponse.accessToken
                })
                checkFbAccount(props.userId, response.authResponse.accessToken, response.authResponse.userID)
                saveTokenFb(props.userId, response.authResponse.accessToken, response.authResponse.userID)
            }
        })
    },[])

    const login = () =>{
       FB.login( (response: fb.StatusResponse) => {
            console.log(response);
            console.log(response.status);
            console.log(response.authResponse.accessToken);
            if(response.authResponse.accessToken){
                props.setDataFacebook({
                    isAuth: true,
                    token: response.authResponse.accessToken
                })
                checkFbAccount(props.userId, response.authResponse.accessToken, response.authResponse.userID)
                saveTokenFb(props.userId, response.authResponse.accessToken, response.authResponse.userID)
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
                    <div className="header__facebook-button" onClick={login}>
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

export default observer(Header)
