import React, {FC, useContext, useEffect, useState} from "react";
import '../styles/PagePosts.css'
const PreviewPopup: FC<any>  = (props:any) =>{
    const fixedHandler = () =>{
        const video:any = document.querySelector('.video-edit');
        const timeFixed = Math.floor(video.currentTime *1000)
        props.setCurrentTime(`${timeFixed}`)
        console.log()
    }
    return(
        <div className="previewPopup">
            <div className="previewPopup__wrapper">
                <div className="preview__conrol">
                    <div className="preview__control-fixed" onClick={fixedHandler}>
                        <img src="./camera.svg" alt="" />
                    </div>
                    <div className="preview__control-close" onClick={() => props.setPreviewPost(false)}>
                        <img src="./close.svg" alt="" />
                    </div>
                </div>
                <div className="preview__video">
                    <video className="video-edit" src={props.src} controls={true}>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default PreviewPopup