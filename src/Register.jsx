import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/react.svg";

const Register = () => {
  const [name, SetName] = useState("");
  const [secondname, SetSecondname] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = { name, secondname, email, password, confirmPassword };
    console.log(newUser);

    if (password.length < 6) {
      alert("Password must have at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      alert("Error: Both passwords must match");
      return;
    }

    const ValidateEmail = (email) => {
      const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return formatoEmail.test(email);
    };
    if (ValidateEmail(email)) {
      console.log("correo correcto");
    } else {
      alert("El formato del correo electrónico no es válido.");
      return;
    }

    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        alert("Success", res);
        navigate("/login");
      })
      .catch((err) => {
        alert("Error", err);
      });
  };

  return (
    <div className=" grid-rows-16 w-screen h-screen fixed text-center">
      <form
        className=" shadow-md rounded grid-rows-16 mx-auto text-center my-auto bg-sky-100 w-fit p-4 mt-[10vh]"
        onSubmit={handleSubmit}
      >
        <img
          className="py 8 animate-spin mx-auto h-10 w-auto"
          src={logo}
          alt="Your Company"
        />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Name:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="text"
          value={name}
          onChange={(e) => SetName(e.target.value)}
          required
        />

        <br />

        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          2n name:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="text"
          value={secondname}
          onChange={(e) => SetSecondname(e.target.value)}
          required
        />

        <br />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Email:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          required
        />

        <br />
        <label className="block  py-5 tracking-tight text-3xl font-medium">
          Password:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          required
        />

        <br />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Confirm Password:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="password"
          value={confirmPassword}
          onChange={(e) => SetConfirmPassword(e.target.value)}
          required
        />

        <br />
        <div className="bg-sky-100 pt-10 pb-5">
          <button
            className="bg-blue-400 text-white rounded w-80 text-3xl font-medium py-1"
            type="submit"
          >
            Register
          </button>

          <div className="block  pt-3 tracking-tight text-s font-small ">
            Already registered?{" "}
            <Link to="/Login" className="text-blue-400">
              Log in
            </Link>
          </div>
          <div className="block  pt-3 tracking-tight text-s font-small ">
            Go Home{" "}
            <Link to="/Home" className="text-blue-400">
              Home
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
