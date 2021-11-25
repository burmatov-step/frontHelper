import { IUser } from "../IUser";

export interface AuthResponse {
    accessToken: string;
    refreshToken: any;
    user: IUser
}