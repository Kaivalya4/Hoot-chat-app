import { Navigate } from "react-router-dom";

import Signup from "../../Src/signup/Signup";
import useGetUser from "../../Src/common/hooks/useGetUser";

const Index = () => {
    const currentUser = useGetUser();

    if(currentUser)
        return <Navigate to="/chat" />;

    return (
        <Signup />
    )
}

export default Index;