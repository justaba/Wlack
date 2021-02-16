import React from "react";
import { ReactComponent as ILogin } from "./icons/login.svg";
import { ReactComponent as IPass } from "./icons/password.svg";

const Login: React.FC = () => {
  return (
    <div className="login">
      <span>Welcome!</span>
      <h3>Join The Community</h3>
      <div className="form-login">
        <label htmlFor="login">E-Mail or Username</label>
        <div className="input-form">
            <ILogin />
          <input id="login" type="text" placeholder="e.g.: elonmusk@mars.com " />
        </div>
        <label htmlFor="">Password</label>
        <div className="input-form">
            <IPass />
          <input type="password" placeholder="e.g.: X Æ A-12" />
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
