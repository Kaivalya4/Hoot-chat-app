import { Navigate } from "react-router-dom";

import useGetUser from "../Src/common/hooks/useGetUser";

const Index = () => {
  const currentUser = useGetUser();

  if(currentUser)
    return <Navigate to="/chat" />

  return <Navigate to="/signup" />;
};

export default Index;
