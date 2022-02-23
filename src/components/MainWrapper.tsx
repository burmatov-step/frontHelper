import { observer } from "mobx-react-lite";
import React, {FC, useContext, useEffect, useState} from "react";
import { Context } from "..";
import '../styles/MainWrapper.css'
import $api from '../http/index'
import Header from './Header'
import FollowPosts from "../pages/followPosts/FollowPosts";
import PagePosts from "../pages/pagePosts/PagePosts";
import SettingAccount from "../pages/settingAccount/SettingAccount";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

const MainWrapper: FC<any> = (props) =>{

    const fff = () =>{
        FB.login(async (response: fb.StatusResponse) => {

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

    const styles = {
        mainWrapper: {
            marginLeft: props.openMenu ? '125px' : '50px',
        }
    };
    
    return(
        <div className='mainWrapper' style={styles.mainWrapper}>
            <Header userId={props.userId} setDataFacebook={props.setDataFacebook} email={props.email} />  
                <Routes>
                    <Route path="/" element={<Navigate to="/find" />} />
                    <Route path="/find" element={<FollowPosts userId={props.userId} dataFacebook={props.dataFacebook} />} />
                    <Route path="/posts" element={<PagePosts />} />
                    <Route path="/accounts" element={<SettingAccount />} />
                </Routes>
        </div>
    )
}

export default MainWrapper