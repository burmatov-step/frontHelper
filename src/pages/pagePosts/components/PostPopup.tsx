import React, {FC, useContext, useEffect, useState} from "react";
import '../styles/PagePosts.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import SelectedAccount from './SelectedAccount'
import FileService from '../../../services/FileService'
const PostPopup: FC<any> = (props) =>{
    const {store} = useContext(Context);
    const [selectedAccount, setSelectedAccount] = useState([{id: 1, username: 'mamin.club'}])
    const [dataTime, setdataTime] = useState(new Date())
    const [minuteTime, setMinuteTime] = useState(0)
    const [usernameAccount, setUsernameAccount] = useState('')
    const [hoursTime, setHoursTime] = useState(0)
    const [textPost, setTextPost] = useState('')
    const [file, setFile] = useState({})
    const planningHandler = ()=>{
        var x = new Date();
        var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
        const data = dataTime.setHours(hoursTime, minuteTime)
        FileService.uploadFile(file, data, textPost, usernameAccount)
    }
    console.log('usernameAccount', usernameAccount)
    useEffect(() => {
        store.setPage('accounts')
      }, []);

      const fileUploadHandler = (event:any) =>{
          setFile([...event.target.files][0])
    }
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
                    <textarea placeholder="Текс поста" onInput={(e:any) => setTextPost(e.target.value)}></textarea>
                </div>
                <div className="post__popup-preview">

                </div>
                <label htmlFor='input_upload' className="post__popup-upload">
                    <input onChange={fileUploadHandler} id="input_upload" type="file" />
                    <div className="post__popup-uploadIcon">
                        <img src="./popupPlaning.svg" alt="" />
                    </div>
                    <div className="post__popup-upload_text">
                        Фото/Видео
                    </div>
                </label>

                <div className="post__popup-selected_wrapper">

                    {selectedAccount.map((account) =>{
                       return <SelectedAccount 
                       accountName={account.username}
                       setdataTime={setdataTime}
                       setUsernameAccount={setUsernameAccount}
                       dataTime={dataTime}
                       setMinuteTime={setMinuteTime}
                       setHoursTime={setHoursTime} />
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
                <div className="post__popup-add">
                    <button onClick={planningHandler}>
                        Запланировать
                    </button>
                </div>

            </div>
        </div>
    )
}

export default observer(PostPopup) 