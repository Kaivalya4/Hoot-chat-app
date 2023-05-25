// import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/chat/Home";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      //now we will work on login and signup
    </div>
  );
}

export default App;
