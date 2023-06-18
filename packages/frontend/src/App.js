// import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/chat/Home";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import Index from "./Pages";
import ProtectedRoutes from "./component/ProtectedRoutes";

function App() {
  console.log(process.env.REACT_APP_ENV);
  return (
    <div className="App">
      <Routes path="/">
        <Route index element={<Index />} />
        <Route
          path="home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoutes>
              <Login />
            </ProtectedRoutes>
          }
        />
        <Route
          path="signup"
          element={
            <ProtectedRoutes>
              <Signup />
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Signup />
      {/*now we will work on login and signup //This time I am serious*/}
    </div>
  );
}

export default App;
