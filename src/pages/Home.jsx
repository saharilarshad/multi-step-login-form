import "../styles/home.css";
import IMG from "../images/email.svg";

const Home = ({ auth, setAuth }) => {
  return (
    <div id="Home" 
    className={`${auth.open ? 'active':''}`}
    >
      <div className="container">
        {/* image */}
        <div className="img">
          <img src={IMG} alt="images" />
        </div>
        {/* content */}
        <div className="text-btns">
          <p>Welcome to purchase step start to end</p>
          <div className="btns">
            <a
              href="#!"
              className="login-btn"
              onClick={() => setAuth({ open: true, form: "login" })}
            >
              Login
            </a>
            <a href="#!" className="register-btn" onClick={() => setAuth({ open: true, form: "register" })}>
              Register
            </a>
          </div>
          <span>Or Login Via Media Social</span>
          <div className="via-social">
            <a href="#!">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#!">
              <i class="fa-brands fa-google"></i>
            </a>
            <a href="#!">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
