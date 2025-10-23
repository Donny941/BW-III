import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const URL = "https://striveschool-api.herokuapp.com/api/profile/me";
  useEffect(() => {
    dispatch(getMyProfile(URL, "TAKE_MY_PROFILE"));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id?" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
