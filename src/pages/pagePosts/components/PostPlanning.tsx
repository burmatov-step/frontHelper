import React, {FC, useContext, useEffect, useState} from "react";
import '../styles/PagePosts.css'
const PostPlanning: FC = () =>{

    return(
        <div className='post__planning'>
            <div className="post__planning-wrapper">
                <div className="post__planning-data">
                    <div className="post__planning-data__time">
                        00:00
                    </div>
                    <div className="post__planning-data__day">
                        10 Дек.
                    </div>
                </div>

                <div className="post__planning-data__account">
                    <div className="post__planning-account-img">
                        <img src="https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg" alt="" />
                    </div>
                    <div className="post__planning-account-name">
                        recepti.good
                    </div>
                </div>
                <div className="post__planning-content">
                    <img src="https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg" alt="" />
                </div>
                <div className="post__planning-text">
                    МОИ ХОРОШИЕ❤️ ЕСЛИ ВИДИТЕ ЭТОТ РЕЦЕПТ У СЕБЯ В ЛЕНТЕ, ПОСТАВЬТЕ ➕➕➕ ТАК Я БУДУ ЗНАТЬ, ЧТО НЕ ПРОПАЛА ИЗ ВАШЕЙ ЛЕНТЫ Пирог с сыром камамбер 🥧 Любителям сыра обязательно понравится рецепт 👌 Пробовали такой пирог? Ингредиенты: 
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