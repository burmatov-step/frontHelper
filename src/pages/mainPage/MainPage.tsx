import React, {FC, useContext, useState} from "react";
import HeaderComponent from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import Registration from "./components/Registration";

const MainPage: FC = () =>{
    const [login, setLogin] = useState(false)
    const [registration, setRegistration] = useState(false)
    return(
        <div>
            <HeaderComponent setRegistration={setRegistration} setLogin={setLogin} />
            <Main />
            {login ? <Login setLogin={setLogin}/> : null}
            {registration ? <Registration setRegistration={setRegistration} /> : null}

        </div>
    )
}

export default MainPage