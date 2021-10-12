import { observer } from "mobx-react-lite";
import React, {FC, useContext, useState} from "react";
import { Context } from "../../..";
import '../styles/Login.css'

const Registration: FC<any> = ({setRegistration}) =>{

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)
    
    return(
        <div className='login-bg' onClick={(e) =>{
            const target = e.target as HTMLTextAreaElement
            if(!target.closest('.login-wrapper')){
                setRegistration(false)
            }
        }}>
            <div className="login-wrapper" >
                <div className="login-title">
                    Sign Up
                </div>
                <form className='form'>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='form-email' placeholder='Введите Email' type="text" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='form-password' placeholder='Введите пароль' type="text" />
                    <button className='form-button' onClick={(e) => {
                        e.preventDefault()
                        store.registration(email, password)
                        setRegistration(false)
                    }}>
                        Sign Up
                    </button>
                </form>

                <div className="login-text">
                    Already have an account? <span>Sign in</span>
                </div>
            </div>
            
       
        </div>
    )
}

export default observer(Registration)