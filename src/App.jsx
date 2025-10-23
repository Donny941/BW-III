import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons";
import "./App.css";
import LinkNav from "./components/LinkNav";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let URL = "https://striveschool-api.herokuapp.com/api/profile/me";
    dispatch(getProfile(URL, "TAKE_MY_PROFILE"));
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
