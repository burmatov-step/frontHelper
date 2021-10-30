import React, {FC, useContext, useState} from "react";
import Post from "../followPosts/components/Post";
import './styles/FollowPosts.css'

const FollowPosts: FC = () =>{
    const example = {
        id: "17909107157049518",
        caption: "🔥ПРОЖИГАЕМ ПРЕСС🔥\n⠀\nКто сохранил треню и не написал \"СПАСИБО\" в комментариях👇🏼👇🏼👇🏼",
        children: [
            {
                id: "17895656006488883",
                media_type: "VIDEO",
                media_url: "https://scontent.cdninstagram.com/v/t50.2886-16/246840529_906395283614011_3842844880581326350_n.mp4?_nc_cat=107&vs=18262844323009172_3691616465&_nc_vs=HBksFQAYJEdORjh0ZzQ3NmVlWVhEZ0RBQTUyX2dFUGgxUTFia1lMQUFBRhUAAsgBABUAGCRHRFA2c2c2NG5MNGJ3QUlEQURhNkR1TUIxMGNpYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaq%2B%2BXlsuPbPxUCKAJDMywXQEwAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=1-5&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=LLgWfuhLaqoAX95lRAa&_nc_ht=video-hel3-1.cdninstagram.com&edm=AL-3X8kEAAAA&oh=80c9e24c26819f736165c410d261ed36&oe=6176BC78&_nc_vts_prog=1&vts=1&_nc_rid=c4068ef2d3",
            },
            {
                id: "17895656006488883",
                media_type: "VIDEO",
                media_url: "https://scontent.cdninstagram.com/v/t50.2886-16/246840529_906395283614011_3842844880581326350_n.mp4?_nc_cat=107&vs=18262844323009172_3691616465&_nc_vs=HBksFQAYJEdORjh0ZzQ3NmVlWVhEZ0RBQTUyX2dFUGgxUTFia1lMQUFBRhUAAsgBABUAGCRHRFA2c2c2NG5MNGJ3QUlEQURhNkR1TUIxMGNpYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaq%2B%2BXlsuPbPxUCKAJDMywXQEwAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=1-5&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=LLgWfuhLaqoAX95lRAa&_nc_ht=video-hel3-1.cdninstagram.com&edm=AL-3X8kEAAAA&oh=80c9e24c26819f736165c410d261ed36&oe=6176BC78&_nc_vts_prog=1&vts=1&_nc_rid=c4068ef2d3",
            },
            {
                id: "17895656006488883",
                media_type: "VIDEO",
                media_url: "https://scontent.cdninstagram.com/v/t50.2886-16/246840529_906395283614011_3842844880581326350_n.mp4?_nc_cat=107&vs=18262844323009172_3691616465&_nc_vs=HBksFQAYJEdORjh0ZzQ3NmVlWVhEZ0RBQTUyX2dFUGgxUTFia1lMQUFBRhUAAsgBABUAGCRHRFA2c2c2NG5MNGJ3QUlEQURhNkR1TUIxMGNpYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaq%2B%2BXlsuPbPxUCKAJDMywXQEwAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=1-5&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=LLgWfuhLaqoAX95lRAa&_nc_ht=video-hel3-1.cdninstagram.com&edm=AL-3X8kEAAAA&oh=80c9e24c26819f736165c410d261ed36&oe=6176BC78&_nc_vts_prog=1&vts=1&_nc_rid=c4068ef2d3",
            },
        ],
        media_type: "CAROUSEL_ALBUM",
        comments_count: 34,
        like_count: 1240,
        media_url: "https://scontent.cdninstagram.com/v/t50.2886-16/246840529_906395283614011_3842844880581326350_n.mp4?_nc_cat=107&vs=18262844323009172_3691616465&_nc_vs=HBksFQAYJEdORjh0ZzQ3NmVlWVhEZ0RBQTUyX2dFUGgxUTFia1lMQUFBRhUAAsgBABUAGCRHRFA2c2c2NG5MNGJ3QUlEQURhNkR1TUIxMGNpYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaq%2B%2BXlsuPbPxUCKAJDMywXQEwAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=1-5&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=LLgWfuhLaqoAX95lRAa&_nc_ht=video-hel3-1.cdninstagram.com&edm=AL-3X8kEAAAA&oh=80c9e24c26819f736165c410d261ed36&oe=6176BC78&_nc_vts_prog=1&vts=1&_nc_rid=c4068ef2d3"
    }

    return(
        <div className='FollowPosts'>
            <div className="find-acount">
                <div className='find-acount__item'>
                    <label className='find-acount__label' >Введите логин аккаунта</label>
                    <input type="text" placeholder='Введите аккаунт' />
                </div>
                <div className="find-acount__item">
                    <button>
                        Добавить
                    </button>
                </div>
            </div>
            <div className="allAcounts">
                <textarea className='allAcounts-textarea' disabled placeholder='Список аккаунтов'></textarea>
            </div>
            <button>Получить посты</button>
            <div className="allPosts">

                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
                <Post {...example} />
            </div>
        </div>
    )
}

export default FollowPosts