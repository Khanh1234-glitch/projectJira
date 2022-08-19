import { CurrentUser } from './../../Interface/auth/CurrentUser';
import { Signin } from './../../Interface/auth/SignIn';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Auth from '../../Services/auth/Auth';

export interface LoginState{
    data:CurrentUser;
    isLoading:boolean;
    error:string;
}

const initialState : LoginState = {
    data:JSON.parse(localStorage.getItem('user')as string)||{},
    isLoading:false,
    error:"",
} 

export const createLogIn = createAsyncThunk(
    "auth/login",
   async (values:Signin) => {
        try {
            const data = await Auth.SignIn(values);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }   
   }
)

const SignInSlice = createSlice({
    name:"Login",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(createLogIn.pending,(state)=>{
            return {...state}
        })
        builder.addCase(createLogIn.fulfilled,(state, {payload})=>{
            return {...state, isLoading:true, data:payload}
        })
        builder.addCase(createLogIn.rejected,(state, error)=>{
            return {...state, isLoading:true, error:error.error.message as string}
        })
    },
})

export default SignInSlice.reducer