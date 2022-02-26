import React, {FC, useContext, useEffect, useState} from "react";
import { observer } from 'mobx-react-lite';
import $api from '../../http/index'
import { Context } from '../../index';
import PostPlanning from './components/PostPlanning'
import PostPopup from './components/PostPopup'

import './styles/PagePosts.css'
const PagePosts: FC = () =>{
    const {store} = useContext(Context);
    const [isPopup, setIsPopup] = useState(false)
    const [postsPlan, setPostsPlan] = useState([])
    const planingHandler = () =>{
        setIsPopup(true)
    }

    const getPosts = async() =>{
        const response  = await $api.get('/getAllPost')
        if(response.status == 200){
            setPostsPlan(response.data)
        }
        console.log(response)
    }
    useEffect(() => {
        store.setPage('posts')
        getPosts()
      }, []);

      console.log(postsPlan)

    return(
        <div className='allPosts__planning'>
            <div className="allPosts__wrapper">
                <div className="allPosts__content">
                    <div className="allPosts__posts-title">
                        Посты
                    </div>
                    <button className='planning__button' onClick={planingHandler}>
                        Запланировать пост
                    </button>
                    <div className="allPosts__content-info">
                            <div className="info__button-wrapper">
                                <div className="info__button-box">
                                    <div className="info__button_item">
                                        <button className='info__button'>
                                            Запланировано
                                        </button>
                                    </div>
                                    <div className="info__button_item">
                                        <button className='info__button'>
                                            Опубликовано
                                        </button>
                                    </div>
                                    <div className="info__button_item">
                                        <button className='info__button'>
                                            Ошибки
                                        </button>
                                    </div>
                                </div>
                                <div className="info__button_item-update">
                                        <button className='info__button-update'>
                                            Обновить
                                        </button>
                                </div>
                            </div>
                            <div className="allPosts__content-posts">
                                {postsPlan.sort((a:any, b:any) => +a.date > +b.date ? 1 : -1).map((postData:any) =>{
                                    if(!postData.posting){
                                        return <PostPlanning key={postData._id} postData={postData}  />
                                    }
                                    
                                })}
                                
                            </div>
                    </div>

                </div>
                <div className="allPosts__settings">
                    <div className="allPosts__settings-title">
                        Фильтр постов
                    </div>
                    <div className="allPosts__settings-filterWrap">
                        <div className="allPosts__settings-filterItem">
                            <div className="allPosts__settings-filterItem__text">
                                mama.kulinarr
                            </div>
                        </div>
                    </div>
                    <div className="allPosts__settings-title">
                        Расписание постов
                    </div>
                    <div className="followPosts__setting-info__theme">
                            <label className='theme_label' >
                                Выберите аккаунт
                                <div className="followPosts-select__wrapper">
                                    <select >
                                        <option>mama.kulinarr</option>                                         
                                    </select>
                                    <img className='followPosts-select__arrow' src="./arrow.svg" alt="" />
                                </div>
                            </label>
                    </div>
                    
                    <div className="followPosts__setting__allAccounts">
                            <div className="allAccounts-title">
                                Расписание mama.klinarr
                            </div>
                            <div className="allAccounts__wrapper">
                                 <div  className="allAccounts_item">
                                    <div className="allAccounts_item-text">
                                        1 <span className='allAccounts_item-text-time'>11:10</span>
                                    </div>
                                    <div className="allAccounts_item-del">
                                        <img src="./delete.svg" alt="" />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                </div>
            </div>
            {isPopup && <PostPopup setIsPopup={setIsPopup} />}
        </div>
    )
}

export default observer(PagePosts)