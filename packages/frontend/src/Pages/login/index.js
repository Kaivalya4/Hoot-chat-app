import {Navigate  } from "react-router-dom"


import Login from "../../Src/login/Login";
import useGetUser from "../../Src/common/hooks/useGetUser";

const Index =  () => {
    const currentUser = useGetUser() || null;

    if(currentUser){
        return <Navigate to="/chat" />
    }

    return (
        <Login />
    )
}

export default Index;