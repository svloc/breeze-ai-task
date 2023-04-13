import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from './Firebase';

import "./auth.css";
import { setisLoggedIn, getisLoggedIn, } from "../../Storage/Storage";
import { PATH_NAME } from "../../Configs/PathName";
import LoginImg from "../../../Assets/Images/Tools.svg";
import googleIcon from "../../../Assets/Icons/google.svg";
import Input from "../../Centimeter/Input/Input";
import Button from "../../Centimeter/Button/Button";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    if (getisLoggedIn()) {
     navigate(PATH_NAME.HELLOWORLD, { replace: true });
    }
  }, [getisLoggedIn()]);

  function handleSubmit(event) {
    event.preventDefault();
    setFormError({});
    if (!formData.email || formData.email.trim().length === 0) {
      setFormError({ ...formError, emailError: "Email is required" });
      return;
    }
    if (!formData.password || formData.password.trim().length === 0) {
      setFormError({ ...formError, passwordError: "Password is required" });
      return;
    }
    if (!Object.keys(formError).length) {
      // handleLogin();
      setisLoggedIn(true);
      navigate(PATH_NAME.HELLOWORLD, { replace: true });
    }
  }


  // const handleLogin = async () => {
  //   const auth = getAuth();
  //   sendSignInLinkToEmail(auth, formData.email, actionCodeSettings)
  //     .then(() => {
  //       window.localStorage.setItem('emailForSignIn', email);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  //};

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setisLoggedIn(true);
        navigate(PATH_NAME.HELLOWORLD, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen flex justify-content-between align-items-center">
      <form className="input-container flex-column flex m-auto justify-content-center box-shadow-light pt-0">
        <img alt="logo" src={LoginImg} height={"150px"} />
        <h2 className="text-center line-in-text">LOGIN</h2>
        <div className="mb-3">
          <Input title='Enter Your Email' name="email" onChange={handleChange} value={formData.email} />
          {formError.emailError && (<p className="text-red">{formError.emailError}</p>)}
        </div>
        <div className="mb-3">
          <Input title='Enter Your Password' name="password" type='password' onChange={handleChange} value={formData.password} />
          {formError.passwordError && (<p className="text-red">{formError.passwordError}</p>)}
        </div>

        <Button disabled={!formData.email || !formData.password} onClick={handleSubmit} type="submit">Login</Button>
        <div className="line-in-text my-3 text-center">or login with</div>
        <div className="flex align-items-center justify-content-center ">
          <Button variant="buttonWithImg" onClick={handleGoogleLogin} type="button">
            <img src={googleIcon} alt="Google" height={"25px"} />
            &nbsp;Google
          </Button>
        </div>
      </form>
    </div>
  );
}
