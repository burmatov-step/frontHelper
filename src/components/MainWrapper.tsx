import { observer } from "mobx-react-lite";
import React, {FC, useContext, useEffect, useState} from "react";
import { Context } from "..";
import '../styles/MainWrapper.css'
import $api from '../http/index'
import Header from './Header'
import FollowPosts from "../pages/followPosts/FollowPosts";
import PagePosts from "../pages/pagePosts/PagePosts";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

const MainWrapper: FC<any> = (props) =>{

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

    const styles = {
        mainWrapper: {
            marginLeft: props.openMenu ? '100px' : '50px',
        }
    };
    
    return(
        <div className='mainWrapper' style={styles.mainWrapper}>
            <Header email={props.email} />  
                <Routes>
                    <Route path="/" element={<Navigate to="/find" />} />
                    <Route path="/find" element={<FollowPosts userId={props.userId} />} />
                    <Route path="/posts" element={<PagePosts />} />
                </Routes>
        </div>
    )
}

export default MainWrapper