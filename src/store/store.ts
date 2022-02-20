import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../http";
import { IUser } from "../models/IUser";
import { AuthResponse } from "../models/response/AuthResponse";
import AuthService from "../services/AuthService";

export default class Store{
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    preloader = false;
    page = '';
    allUsersInsta =[{username: 'mamin.club'}];


    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool: boolean){
        this.isAuth = bool
    }

    setPage(name: string){
        this.page = name
    }

    setUser(user: IUser){
        this.user = user
    }
    setallUsersInsta(allUsersInsta: any){
        this.allUsersInsta = allUsersInsta
    }

    setLoading(bool: boolean){
        this.isLoading = bool
    }

    setPreloader(bool:boolean){
        this.preloader = bool
    }

    async login(email: string, password: string){
        try{
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            this.setUser(response.data.user)
            this.setAuth(true);
            
        }catch(e: any){
            console.log(e)
        }
    }

    async registration(email: string, password: string){
        try{
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            this.setUser(response.data.user)
            this.setAuth(true);
           
        }catch(e){
            console.log(e)
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser)
        }catch(e){
            console.log(e)
        }
    }

    async checkAuth(){
        this.setLoading(true)
        try{
            const refreshToken = localStorage.getItem('refreshToken')
            const response: any = await axios.post(`${API_URL}/refresh`, {
                refreshToken
            })
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            this.setUser(response.data.user)
            this.setAuth(true);
           

        }catch(e){
            console.log(e)
        } finally{
            this.setLoading(false)
        }
    }
}