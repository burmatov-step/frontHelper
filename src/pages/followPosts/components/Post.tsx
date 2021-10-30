import React, {Children, FC, useContext, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../styles/Post.css'
import { AiFillLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

const Post: FC<any> = (example) =>{
    console.log(example)
    SwiperCore.use([Pagination])
    return(
        <div className='post'>
            <div className="content">
             <Swiper
                pagination={{ clickable: true }}
                >
                {example.children ? example.children.map((children: any) =>{
                    if(children.media_type == 'VIDEO'){
                       return <SwiperSlide>
                            <video controls width="250">
                                <source src={children.media_url}
                                        type="video/mp4"></source>
                            </video>
                        </SwiperSlide>
                    } else if(children.media_type == 'IMAGE'){
                        return <SwiperSlide>
                            <img src={children.media_url} alt="" />
                        </SwiperSlide>
                    }
                    
                }) : example.media_type == 'VIDEO' ? <SwiperSlide>
                <video controls width="250">
                    <source src={example.media_url}
                            type="video/mp4"></source>
                </video>
            </SwiperSlide>: <SwiperSlide>
                            <img src={example.media_url} alt="" />
                        </SwiperSlide>}
            </Swiper>
                
            </div>
            <div className='post-feedback'>
                <div className="post-feedback__like">
                <AiFillLike />{example.like_count}
                </div>
                <div className="post-feedback-comments">
                <AiOutlineComment /> {example.comments_count}
                </div>
            </div>
            <div className="info">
                {example.caption}
            </div>
            <div className="planning">
                <button>
                    Запланировать
                </button>
            </div>
        </div>
    )
}

export default Post