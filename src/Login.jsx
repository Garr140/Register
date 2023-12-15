import { useState } from "react";
import logo from "./assets/react.svg";
import { Link } from "react-router-dom";

// const navigate = useNavigate;

const Login = () => {
  const [email, EmailUpdate] = useState("");
  const [password, PasswordUpdate] = useState("");

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/user" + email)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //console.log(resp);
          if (Object.keys(resp).lenght === 0) {
            alert("Please enter valid email");
          } // else {
          //     if (resp.password === password) {
          //       alert("success");
          //       navigate("/home");
          //     } else {
          //       alert("Please enter valid password");
          //     }
          //   }
        })
        .catch((err) => {
          console.log("Login failed due to: " + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      alert("Please enter your email");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please enter your password");
    }

    return result;
  };

  return (
    <div className=" grid-rows-16 w-screen h-screen fixed text-center">
      <form
        className=" shadow-md rounded grid-rows-16 mx-auto text-center my-auto bg-sky-100 w-fit p-4 mt-[25vh]"
        onSubmit={ProceedLogin}
      >
        <img
          className="py 8 animate-spin mx-auto h-10 w-auto"
          src={logo}
          alt="Your Company"
        />

        <br />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Email:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="email"
          value={email}
          onChange={(e) => EmailUpdate(e.target.value)}
        />

        <br />
        <label className="block  py-5 tracking-tight text-3xl font-medium">
          Password:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="password"
          value={password}
          onChange={(e) => PasswordUpdate(e.target.value)}
        />

        <div className="bg-sky-100 pt-10 pb-5">
          <button
            className="bg-blue-400 text-white rounded w-80 text-3xl font-medium py-1"
            type="submit"
          >
            Login
          </button>
          <div className="block  pt-3 tracking-tight text-s font-small ">
            New user?{" "}
            <Link to="/Register" className="text-blue-400">
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
