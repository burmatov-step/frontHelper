import { observer } from "mobx-react-lite";
import React, {FC, useContext, useState} from "react";
import { Context } from "..";
import '../styles/HeaderMain.css'

const SideBar: FC<any> = (props) =>{
    return(
        <div className='sidebar'>
            <ul>
                <li>Слежка</li>
                <li>Посты</li>
                <li>авав</li>
                <li>ава</li>
                <li>вава</li>
            </ul>
        </div>
    )
}

export default SideBar