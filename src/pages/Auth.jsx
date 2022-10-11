import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/auth.css";

const Auth = ({ auth, setAuth }) => {
  return (
    <div id="Auth" className={`${auth.open ? "show" : ""}`}>
      <a
        href="#!"
        className="close"
        onClick={() => setAuth({ ...auth, open: false })}
      >
        <i className="fas fa-times"></i>
      </a>

      <div className="content">
        {auth.form === "login" && <LoginForm />}
        {auth.form === "register" && <RegisterForm />}
      </div>
    </div>
  );
};

export default Auth;
