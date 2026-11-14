// Import Style
import "./App.css";

// Import Components
import ClientPage from "./Pages/Client Page/ClientPage";
import ManagerPage from "./Pages/MangerPage/MangerPage";
import Message from "./Components/Message/Message";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import SignUp from "./Components/Form/SignUp";
import SignIn from "./Components/Form/SignIn";

// Import Router
import { Routes, Route, Navigate } from "react-router";

// Import Context
import { AuthContext } from "../src/context/AuthContext";
import { useContext, useEffect } from "react";

function App() {
  const { message, setMessage } = useContext(AuthContext);

  useEffect(() => {
    if (message.isShow) {
      setTimeout(() => {
        setMessage({
          isShow: false,
          msgTxt: "",
          arbMsgTxt: "",
          msgBGColor: "",
          time: 0,
          reminder: false,
        });
      }, message.time);
    }
  }, [message]);

  return (
    <div className={"appContainer"}>
      {message.isShow && (
        <Message
          mesgTxt={message.msgTxt}
          msgBGColor={message.msgBGColor}
          reminder={message.reminder}
          arbMsgTxt={message.arbMsgTxt}
        />
      )}
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/client/*" element={<ClientPage />} />

        <Route path="/manager/*" element={<ManagerPage />} />

        <Route path="*" element={<Navigate to="/client/home" replace />} />
        <Route path="/signUp" element={<SignUp sign={"Up"} />} />
        <Route path="/signIn" element={<SignIn sign={"In"} />} />
      </Routes>
    </div>
  );
}

export default App;
