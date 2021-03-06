import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import $api from '../../../http/index'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../styles/Post.css'
import { AiFillLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

const Post: FC<any> = (example) =>{
    SwiperCore.use([Pagination])
    return(
        <div className='post'>
            <div className="content">
                <Swiper
                    pagination={{ clickable: true }}
                    >
                        {example.children ? example.children.data.map((children: any) =>{
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
            <div className="post_description">
                <div className='post-feedback'>
                    <div className="post-feedback__like">
                        <div className="post-feedback__like-img">
                        <img src="./like.svg" alt="" />
                        </div>
                        <div className="post-feedback__like-text">
                            {example.like_count}
                        </div>
                    </div>
                    <div className="post-feedback-comments">
                        <div className="post-feedback-comments-img">
                            <img src="./comment.svg" alt="" />
                        </div>
                        <div className="post-feedback-comments-text">
                            {example.comments_count}
                        </div>
                     
                    </div>
                </div>
                <div className="info">
                    {example.caption}
                </div>
                <div className="post_buttons">
                    <button className='post_button' onClick={async () =>{
                    const response = await $api.post('/save_video', {link: example['media_url']})
                    }}>
                        ??????????????
                    </button>

                    <button className='post_button'>
                        ??????????????????????????
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Post