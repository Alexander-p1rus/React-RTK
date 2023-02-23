import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {log} from "util";

// export const fetchUsers=()=>{
//     return async(dispatch:AppDispatch)=>{
//         try {
//             dispatch(userSlice.actions.usersFetching())
//             const response=await axios.get<IUser[]>("https://jsosnplaceholder.typicode.com/users")
//             dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//         }catch (e) {
//             dispatch(userSlice.actions.usersFetchingError((e as Error).message))
//         }
//     }
// }

export const fetchUsers=createAsyncThunk(
    'user/fetchAll',
    async (_,thunkAPI)=>{
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            return response.data
        }catch (e){
            return thunkAPI.rejectWithValue('wtf')
        }

    }
)