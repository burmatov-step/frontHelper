import React, {FC, useContext, useEffect, useState} from "react";
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import './styles/PagePosts.css'
const PagePosts: FC = () =>{
    const {store} = useContext(Context);
    useEffect(() => {
        store.setPage('posts')
      }, []);
    return(
        <div className='allPosts'>
            <div className="allPosts__wrapper">
                <div className="allPosts__content">
                    <div className="allPosts__posts-title">
                        Посты
                    </div>
                    <button className='planning__button'>
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
                    </div>
                </div>
                <div className="allPosts__settings">

                </div>
            </div>
        </div>
    )
}

export default observer(PagePosts)