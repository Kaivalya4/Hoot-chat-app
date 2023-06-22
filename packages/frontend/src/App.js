// import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";

import Index from "./Pages/index";
import SignupIndex from "./Pages/signup/index";
import LoginIndex from "./Pages/login/index";
import ChatIndex from "./Pages/chat/index";

function App() {
  return (
    <div className="App">
      <Routes path="/">
        <Route index element={<Index />} />
        <Route
          path="chat"
          element={
              <ChatIndex />
          }
        />
        <Route
          path="login"
          element={
              <LoginIndex />
          }
        />
        <Route
          path="signup"
          element={<SignupIndex />}
        />
      </Routes>
    </div>
  );
}

export default App;
