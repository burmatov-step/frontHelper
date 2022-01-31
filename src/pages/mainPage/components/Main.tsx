import React, {FC} from "react";
import '../styles/Main.css'

const Main: FC = () =>{
    
    return(
        <div className='main'>
            <div className='container'>
                <div className="main__wrapper">
                    <div className="main__item-info">
                    <div className="main__item-info-title">
                    Современное решение рутинных задач бизнеса
                    </div>
                    <div className="main__item-info-text">
                    Создай свою страницу сайта и начни принимать оплаты в 1 клик
                    </div>
                    <div className="main__item-info-button">
                        <button>
                            Создать страницу
                        </button>
                    </div>
                    <div className="main__item-info-contact">
                        <div className="info-contact__item">
                            <img src="./call.svg" alt="" />
                            <a href="#" className='info-phone info'>+7 (706) 420-21-01</a>
                        </div>
                        <div className="info-contact__item info-contact__item-mail">
                            <img src="./call.svg" alt="" />
                            <a href="#" className='info-mail'>info@daru.link</a>
                        </div>
                        
                        
                    </div>

                    </div>
                    <div className="main__item-content">
                        <img src="./phone.svg" alt="" />
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Main