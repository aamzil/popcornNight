import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import SignUp from "./components/SignUp";
import Shows from "./components/Shows";
import Watchlist from "./components/Watchlist";
import "./App.css";
import Playscreen from "./components/Playscreen";
import MoviesDetails from "./components/MoviesDetails";
import ShowsDetails from "./components/ShowsDetails";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const userAuth = useSelector(selectUser);

  // dispatch the user information if logged in. if not, redirect the user to the login page
  useEffect(() => {
    const session = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return session;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={userAuth ? <Home /> : <Navigate to={"/Login"} replace />}
          />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Watchlist" element={<Watchlist />} />
          <Route path="/Playscreen" element={<Playscreen />} />
          <Route path="/MoviesDetails/:id" element={<MoviesDetails />} />
          <Route path="/ShowsDetails/:id" element={<ShowsDetails />} />
          <Route
            path="/SignUp"
            element={!userAuth ? <SignUp /> : <Navigate to={"/"} replace />}
          />

          <Route
            path="/Login"
            element={!userAuth ? <Login /> : <Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
