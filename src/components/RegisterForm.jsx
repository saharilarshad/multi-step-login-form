import React, { useState } from "react";

const RegisterForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const plusIndex = (n) => {
    setCurrentIndex((prev) => prev + n);
  };

  const handleNext = (e) => {
    e.preventDefault();

    plusIndex(1);
  };

  return (
    <div className="register">
      <strong>Sign Up</strong>

      {/* progress bar */}
      <div className="progress-bar">
        <ul>
          <div
            className="progress"
            style={{ width: `calc(100% / 3 * ${currentIndex}` }}
          />
          {["Name", "Contact", "Birth", "Submit"].map((item, index) => (
            <li
              key={item}
              data-title={item}
              className={`${currentIndex >= index ? "active" : ""}`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>

      {/* pages */}
      <div
        className="wrapper"
        style={{ marginLeft: `${currentIndex * -100}%` }}
      >
        {/* basic info */}
        <form onSubmit={handleNext}>
          <label>
            First Name<span>*</span>
          </label>

          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" required />
          </div>
          <label>
            Last Name<span>*</span>
          </label>

          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" required />
          </div>
          {/* <label>
          Password<span>*</span>
        </label>

        <div className="input-group">
          <i className="fa-solid fa-lock"></i>
          <input type="password" required />
        </div> */}

          <div className="btns">
            <button type="submit">Next</button>
          </div>
        </form>

        {/* contact info */}
        <form onSubmit={handleNext}>
          <label>
            Email<span>*</span>
          </label>

          <div className="input-group">
            <i className="far fa-paper-plane"></i>
            <input type="email" required />
          </div>
          <label>
            Phone Number<span>*</span>
          </label>

          <div className="input-group">
            <i className="fa-solid fa-lock"></i>
            <input type="number" required />
          </div>

          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>Prev</button>
            <button type="submit">Next</button>
          </div>
        </form>

        {/* date of birth */}
        <form onSubmit={handleNext}>
          <label>
            Date<span>*</span>
          </label>

          <div className="input-group">
            <i className="far fa-copy"></i>
            <input type="date" required />
          </div>
          <label>
            Gender<span>*</span>
          </label>

          <div className="input-group">
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>Prev</button>
            <button type="submit">Next</button>
          </div>
        </form>

        {/* submit */}
        <form>
          <label>
            Username<span>*</span>
          </label>

          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" required />
          </div>
          <label>
            Password<span>*</span>
          </label>

          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" required />
          </div>

          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>Prev</button>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>

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

export default RegisterForm;
