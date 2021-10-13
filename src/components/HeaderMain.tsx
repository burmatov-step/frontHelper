import { observer } from "mobx-react-lite";
import React, {FC, useContext, useState} from "react";
import { Context } from "..";
import '../styles/HeaderMain.css'

const HeaderMain: FC<any> = (props) =>{
    return(
        <header className='mainHeader'>
            <div className="mainHeader__info">
                {props.email}
            </div>
        </header>
    )
}

export default HeaderMain