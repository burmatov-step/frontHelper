import { observer } from "mobx-react-lite";
import React, {FC, useContext, useState} from "react";
import { Context } from "../../..";
import '../styles/Login.css'

const Login: FC<any> = ({setLogin}) =>{
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)
    return(
        <div className='login-bg' onClick={(e) =>{
            const target = e.target as HTMLTextAreaElement
            if(!target.closest('.login-wrapper')){
                setLogin(false)
            }
        } }>
            <div className="login-wrapper">
                <div className="login-title">
                    Sign In
                </div>
                <form className='form'>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='form-email' placeholder='Введите Email' type="text" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='form-password' placeholder='Введите пароль' type="text" />
                    <button onClick={(e) => {
                        e.preventDefault()
                        store.login(email, password)
                        setLogin(false)
                    }} className='form-button'>
                        Sign In
                    </button>
                </form>

                <div className="login-text">
                    Don't have account? <span>Create new one</span>
                </div>
            </div>
            
       
        </div>
    )
}

export default observer(Login) 