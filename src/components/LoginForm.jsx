import React from "react";

const LoginForm = () => {
  return (
    <div className="login">
      <strong>Sign In</strong>

      <form>
        <label>
          Email<span>*</span>
        </label>

        <div className="input-group">
          <i className="far fa-paper-plane"></i>
          <input type="email" required />
        </div>
        <label>
          Password<span>*</span>
        </label>

        <div className="input-group">
          <i className="fa-solid fa-lock"></i>
          <input type="password" required />
        </div>

        <div className="btns">
          <button type="submit">Login</button>
        </div>

        <a href="#!" className="forget">
          Forget Your Password
        </a>
      </form>

      <div className="intro-text">
        <span>Welcome to this site</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
          error, repellendus a iure, maiores sunt aspernatur accusamus
          laboriosam consequatur labore sequi laborum molestiae magnam. Sed
          magni odio fugit eaque!
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
