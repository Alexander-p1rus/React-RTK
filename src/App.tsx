import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";

const App = () => {
    const dispatch = useAppDispatch()
    const {users,error,isLoading}=useAppSelector(state => state.userReducer)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    if(error){
        return <div>ERROR</div>
    }

    if(isLoading){
        return <div>LOADING...</div>
    }

    return (
        <div>
            {JSON.stringify(users)}
        </div>
    );
};

export default App;