import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import LoginForm from './components/LoginForm';
import { IUser } from './models/IUser';
import MainPage from './pages/mainPage/MainPage';
import UserService from './services/UserService';
import './styles/App.css'

function App() {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([])
  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  },[])

  async function getUsers() {
    try{
      const response = await UserService.fetchUsers();
      setUsers(response.data)
    }catch(e){
      console.log(e)
    }
  }

  if(store.isLoading){
    return <div>Загрузка...</div>
  }

  if(!store.isAuth){
    return(
      <MainPage />
      // <div>
      //   <LoginForm/>
      //   <button onClick={getUsers}>Получить список пользователей</button>
      // </div>
      
    )
  }
  return (
    <div >
      <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
      <h1>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!'}</h1>
      <button onClick={() => store.logout()} >Выйти</button>
      <div>
        <button onClick={getUsers}>Получить список пользователей</button>
      </div>
      {users.map(user =>{
        return <div key={user.email}>{user.email}</div>
      })}
    </div>
  );
}

export default observer(App);
