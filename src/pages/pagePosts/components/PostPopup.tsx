import React, {FC, useContext, useEffect, useState} from "react";
import '../styles/PagePosts.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import SelectedAccount from './SelectedAccount'
import FileService from '../../../services/FileService'
import PreviewPost from './PreviewPopup'
import FileReader from '@tanker/file-reader';
const PostPopup: FC<any> = (props) =>{
    const {store} = useContext(Context);
    const [selectedAccount, setSelectedAccount] = useState([])
    const [dataTime, setdataTime] = useState(new Date())
    const [previewPost, setPreviewPost] = useState(false)
    const [minuteTime, setMinuteTime] = useState(0)
    const [currentTime, setCurrentTime] = useState('0')
    const [usernameAccount, setUsernameAccount] = useState('')
    const [hoursTime, setHoursTime] = useState(0)
    const [textPost, setTextPost] = useState('')
    const [previewUrl, setPreviewUrl] = useState('')
    const [file, setFile] = useState({})
    const planningHandler = async()=>{
        store.setPreloader(true)
        const video: any = document.querySelector('video')
        if(video.duration){
            let isFormat = (video.videoWidth / video.videoHeight) >= 0.8 && (video.videoWidth / video.videoHeight) <= 1.7
            console.log(isFormat)
            console.log(video.videoWidth / video.videoHeight)
            console.dir(video)
            if(video.duration < 60 && isFormat){
                const data = dataTime.setHours(hoursTime, minuteTime)
                const response = await FileService.uploadFile(file, data, textPost, usernameAccount, currentTime);
                if(response?.status == 200){
                    props.setIsPopup(false)
                }else{
                    alert('ошибка')
                }
            }else{
                alert('Видео больше 60 секунд, либо не верный формат')
            }
            console.dir(video)
        }else{
            const data = dataTime.setHours(hoursTime, minuteTime)
            const response = await FileService.uploadFile(file, data, textPost, usernameAccount, currentTime);
            if(response?.status == 200){
                props.setIsPopup(false)
            }else{
                alert('ошибка')
            }
        }


        store.setPreloader(false)
    }

    const selectedAccauntHandler = (e:any) =>{
        const accauntData:any = [...selectedAccount, store.allUsersInsta.find((item) => item.username == e.target.value)] 
        accauntData && setSelectedAccount(accauntData)
    }

      const fileUploadHandler = async(event:any) =>{
        let filesd
        if(event.target.files && event.target.files[0]){
            filesd = event.target.files[0];

            const reader = new FileReader(filesd);
            const dataUrl = await reader.readAsDataURL();
            setPreviewUrl(dataUrl)
            console.log('reader', reader)
              setFile([...event.target.files][0])
        }

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
                {previewUrl.length > 1 &&
                <div className="preview">
                    <div className="preview__edit" onClick={() => setPreviewPost(true)}>
                        <img src="./pencil.svg" alt="" />
                    </div>
                    <video src={previewUrl}></video>
                </div>}


                <div className="post__popup-selected_wrapper">

                    {selectedAccount.map((account:any) =>{
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
                        <select onChange={selectedAccauntHandler}>
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
          {previewPost && <PreviewPost src={previewUrl} setCurrentTime={setCurrentTime} setPreviewPost={setPreviewPost} />}  
        </div>
    )
}

export default observer(PostPopup) 