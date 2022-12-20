import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Card from '../Card';
import '../../Style.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const onConfirmPasswordChange = e => setConfirmPassword(e.target.value);

  const onFormSumbit = () => {
    if (confirmPassword === password) {
      setErrorMessage(`Password match`);
      return;
    } else {
      setErrorMessage(`Password doesnot match`);
      return;
    }
  }
  return (
    <Card header="Create New Account" >
      <div className="login--div">
        <div className="login--form">
          <div className="login--form--error-message"><span className="margin-top-1p2">{errorMessage}</span></div>
          <div className="login--form-item margin-top-1p2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={onEmailChange}
              className="login--form-item--input"
            />
          </div>
          <div className="login--form-item margin-top-1p2">
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={onPasswordChange}
              className="login--form-item--input"
            />
          </div>
          <div className="login--form-item margin-top-1p2">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              className="login--form-item--input"
            />
          </div>
          <div className="login--form-item margin-top-1p2">
            <div onClick={onFormSumbit} className="login--form-item--submit">SignUp</div>
          </div>
          <div className="login--form--footer margin-top-1p2">
            <span>Already A User? <Link className="login--form--link" to='/login'>Login Here</Link></span>
          </div>
          <div className="login--form--footer margin-top-25">
            <span>Forget Password?  <Link className="login--form--link" to="/new-password">Get New</Link></span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Signup