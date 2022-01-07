import React, {FC, useContext, useEffect, useState} from "react";
import '../styles/PagePosts.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import SelectedAccount from './SelectedAccount'
const PostPopup: FC<any> = (props) =>{
    const {store} = useContext(Context);
    const [selectedAccount, setSelectedAccount] = useState([{id: 1, username: 'nsjfnjsnf'}])
    useEffect(() => {
        store.setPage('accounts')
      }, []);
    return(
        <div className='post__popup'>
            <div className="post__popup-wrapper">
                <div className="post__popup-close" onClick={() => props.setIsPopup(false)}>
                    <img src="./close.svg" alt="" />
                </div>
                <div className="post__popup-title">
                    Планирование нового поста
                </div>
                <div className="post__popup-text">
                    <textarea placeholder="Текс поста"></textarea>
                </div>
                <div className="post__popup-preview">

                </div>
                <label htmlFor='input_upload' className="post__popup-upload">
                    <input id="input_upload" type="file" />
                    <div className="post__popup-uploadIcon">
                        <img src="./popupPlaning.svg" alt="" />
                    </div>
                    <div className="post__popup-upload_text">
                        Фото/Видео
                    </div>
                </label>

                <div className="post__popup-selected_wrapper">

                    {selectedAccount.map((account) =>{
                       return <SelectedAccount />
                    })}
                </div>
                <label className='post__popup-label' >
                    Добавьте страницу
                    <div className="post__popup-select__wrapper">
                        <select >
                            <option>Добавить</option> 
                            {store.allUsersInsta.map((user) =>{
                               return <option>{user.username}</option>  
                            })}                                        
                                                                   
                        </select>
                        <img className='post__popup-select__arrow' src="./arrow.svg" alt="" />
                    </div>
                </label>
            </div>
        </div>
    )
}

export default observer(PostPopup) 