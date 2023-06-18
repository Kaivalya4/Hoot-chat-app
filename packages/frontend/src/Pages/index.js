import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.displayName);
  useEffect(() => {
    if (user === "") {
      navigate("signup");
    } else {
      navigate("home");
    }
  }, [user, navigate]);
  console.log(user);

  return null;
};

export default Index;
