import React, {FC, useContext, useEffect, useState} from "react";
import '../styles/PagePosts.css'
const PostPlanning: FC<any>  = (props:any) =>{
    let date = new Date(+props.postData.date)
    const monthName:any = {
        0: 'Янв.',
        1: 'Фев.',
        2: 'Март',
        3: 'Апр.',
        4: 'Май',
        5: 'Июнь',
        6: 'Июль',
        7: 'Авг.',
        8: 'Сент.',
        9: 'Окт.',
        10: 'Ноя.',
        11: 'Дек.'
    }
    return(
        <div className='post__planning'>
            <div className="post__planning-wrapper">
                <div className="post__planning-data">
                    <div className="post__planning-data__time">
                        {`${date.getHours()}:${date.getMinutes()}`}
                    </div>
                    <div className="post__planning-data__day">
                        {`${date.getDate()} ${monthName[date.getMonth()]}` }
                    </div>
                    <div className="isPost">
                        {`${props.postData.posting}`}
                    </div>
                </div>

                <div className="post__planning-data__account">
                    <div className="post__planning-account-img">
                        <img src="https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg" alt="" />
                    </div>
                    <div className="post__planning-account-name">
                        {props.postData.username}
                    </div>
                </div>
                <div className="post__planning-content">
                    <img src="https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg" alt="" />
                </div>
                <div className="post__planning-text">
                    {encodeURIComponent(props?.postData?.text)}
                </div>
            </div>

            <div className="post__planning-edit">
                <button className='post__planning-edit__button'>
                    <img src="./pencil.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default PostPlanning