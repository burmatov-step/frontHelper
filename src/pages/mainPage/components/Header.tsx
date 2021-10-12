import React, {FC, useContext, useState} from "react";
import '../styles/Header.css'

const HeaderComponent: FC<any> = ({setRegistration, setLogin}) =>{
    console.log(setRegistration)
    return(
        <div className='header'>
            <div className='container'>
                <div className='header-wrapper' >
                    <div className='header-item'>
                        <div>Главная</div>
                        <div>Тариф</div>
                        <div>Контакты</div>
                    </div>
                    <div className='header-item'>
                        <img src="./logosmm.svg" alt="" />
                    </div>
                    <div className='header-item'> 
                        <div className='registration' onClick={() => setRegistration(true)}>Регистрация</div>
                        <div className='login' onClick={() => setLogin(true)}>Вход</div> 
                        <div className='robo'>Robokassa</div> 
                    </div>


                </div>
            </div>       
        </div>
    )
}

export default HeaderComponent