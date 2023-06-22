import { Navigate } from "react-router-dom"

import Home from "../../Src/chat/Home";
import useGetUser from "../../Src/common/hooks/useGetUser";

const Index = () => {
    const currentUser = useGetUser();

    if(!currentUser)
        return <Navigate to="/signup" />;

    return (
        <Home />
    )
}

export default Index;