import React, {FC, useContext, useEffect, useState} from "react";
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import './styles/SettingAccount.css'
const SettingAccount: FC = () =>{
    const {store} = useContext(Context);
    useEffect(() => {
        store.setPage('accounts')
      }, []);
    return(
        <div className='settingAccount' >
            <div className="settingAccount-title">
                Настройка аккаунтов
            </div>
            <div className="settingAccount__change">
                
                <div className="settingAccount__change-item">
                        <label className='settingAccount_label' >
                            Выберите аккаунт
                            <div className="settingAccount__change-select__wrapper">
                                <select >
                                    <option>mama.kulinarr</option>                                         
                                </select>
                                <img className='settingAccount-select__arrow' src="./arrow.svg" alt="" />
                            </div>
                        </label>
                </div>
            </div>
            <div className="settingAccount-title">
            Подключенные аккаунты
            </div>
            <div className="settingAccount-allAccount">
                <div  className="allAccounts_item">
                    <div className="allAccounts_item-text">
                        mama.kulinarr
                    </div>
                    <div className="allAccounts_item-del">
                        <img src="./delete.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default observer(SettingAccount)