import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import "./Login.css";

function Login() {
  const email = useRef(null);
  const password = useRef(null);

  // function to popup the google authentification when selected
  const googleAuth = (e) => {
    e.preventDefault();
    auth.signInWithRedirect(provider).catch((err) => {
      alert(err.message);
    });
  };

  // function to log the user in if his/her informations are valid
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email.current.value, password.current.value)
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
        <Link to={"/Login"}>
          <a href="">POPCORN NIGHT</a>
        </Link>
      </div>

      <form action="">
        <h1>Sign In</h1>
        <label htmlFor="">Email</label>
        <input ref={email} type="email" name="" id="" />

        <label htmlFor="">Password</label>
        <input ref={password} type="password" name="" id="" />

        <button className="signin" type="submit" onClick={signIn}>
          Sign In
        </button>

        <p>
          New to Popcorn Night ?{" "}
          <Link to={"/SignUp"} style={{ color: "rgb(158, 33, 13)" }} href="">
            Create an account
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
