import { CurrentUser } from './../../Interface/auth/CurrentUser';
import { Signin } from '../../Interface/auth/SignIn';
import axiosClient from "../AxiosClient"




const Auth = {
    SignIn:(values:Signin)=>{
        return axiosClient.post<unknown,CurrentUser>(`Users/signin`,values);
    }
}

export default Auth