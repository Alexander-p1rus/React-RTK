import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./PostContainer";

const App = () => {
    // const dispatch = useAppDispatch()
    // const {users,error,isLoading}=useAppSelector(state => state.userReducer)
    // useEffect(()=>{
    //     dispatch(fetchUsers())
    // },[])
    //
    // if(error){
    //     return <div>ERROR {error}</div>
    // }
    //
    // if(isLoading){
    //     return <div>LOADING...</div>
    // }
    return (
        <div>
            <PostContainer/>
        </div>
    );
};

export default App;