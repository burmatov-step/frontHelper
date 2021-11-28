import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import MainWrapper from './components/MainWrapper';
import LoginForm from './components/LoginForm';
import SideBar from './components/SideBar';
import { IUser } from './models/IUser';
import FollowPosts from './pages/followPosts/FollowPosts';
import MainPage from './pages/mainPage/MainPage';
import UserService from './services/UserService';
import './styles/App.css'

function App() {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([])
    const [dataFacebook, setdataFacebook] = useState({})
    const [openMenu, setopenMenu] = useState(false)
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
    )
  }

  return (
    <div >
      <MainWrapper userId={store.user.id} openMenu={openMenu}  dataFacebook={dataFacebook} setDataFacebook={setdataFacebook} email={store.user.email} />
      <SideBar openMenu={openMenu} setopenMenu={setopenMenu} />
      {/* <FollowPosts dataFacebook={dataFacebook}  userId={store.user.id} /> */}
      {/* <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
      <h1>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!'}</h1>
      <button onClick={() => store.logout()} >Выйти</button>
      <div>
        <button onClick={getUsers}>Получить список пользователей</button>
      </div>
      {users.map(user =>{
        return <div key={user.email}>{user.email}</div>
      })} */}
    </div>
  );
}

export default observer(App);
