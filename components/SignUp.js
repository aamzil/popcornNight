import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import "./Login.css";

function Login() {
  const email = useRef(null);
  const password = useRef(null);

  // function to popup the google authentification if selected
  const googleAuth = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__header">
        <Link to={"/SignUp"}>
          <a href="">POPCORN NIGHT</a>
        </Link>
      </div>
      <form action="">
        <h1>Sign Up</h1>
        <label htmlFor="">Email</label>
        <input ref={email} type="email" name="" id="" />

        <label htmlFor="">Password</label>
        <input ref={password} type="password" name="" id="" />

        <button className="signin" type="submit" onClick={register}>
          Sign Up
        </button>

        <p>
          Already have an account ?{" "}
          <Link to={"/Login"} style={{ color: "rgb(158, 33, 13)" }} href="">
            Sign In
          </Link>
        </p>

        <button onClick={googleAuth} className="google" type="submit">
          Continue with Google
        </button>
      </form>

      <div className="login__shadow"></div>
    </div>
  );
}

export default Login;
