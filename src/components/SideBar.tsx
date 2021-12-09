import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import React, {FC, useContext, useState} from "react";
import { Context } from "..";
import { Link } from 'react-router-dom';
import '../styles/MainWrapper.css'

const SideBar: FC<any> = (props) =>{
    const {store} = useContext(Context);
    let navigate = useNavigate();
    const styles = {
        sideBar: {
            width: props.openMenu ? '100px' : '50px',
        },
        span: {
            width: props.openMenu ? '50px' : '0',
        }
    };

    return(
        <div className='sidebar' style={styles.sideBar}>
            <div className="sidebar-burger" onClick={() => props.setopenMenu(!props.openMenu)}>
                <img src="./logo.svg" alt="" />
            </div>
            <ul className='sidebar-menu'>
                <li className={`sidebar-menu__item ${store.page == 'find' ? 'active' : ''}`} onClick={() =>{navigate('/find')}} onMouseOver={() => props.setopenMenu(true)} onMouseOut={() => props.setopenMenu(false)}>
                    <img src="./search.svg" alt="" />
                    <span style={styles.span}>Поиск</span>
                </li>
                <li className={`sidebar-menu__item ${store.page == 'posts' ? 'active' : ''}`} onClick={() =>{navigate('/posts')}} onMouseOver={() => props.setopenMenu(true)} onMouseOut={() => props.setopenMenu(false)}>
                    <img src="./calendar.svg" alt="" />
                    <span style={styles.span}>Посты</span>
                </li>
            </ul>
        </div>
    )
}

export default observer(SideBar) 