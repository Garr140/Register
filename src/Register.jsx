
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/react.svg";

// hooks
import useUser from "./hooks/useUser";

const Register = () => {

  const navigate = useNavigate();
  const { setRegister, handleInput, getRegister } = useUser(navigate);

  return (
    <div className=" grid-rows-16 w-screen h-screen fixed text-center">
      <form
        className=" shadow-md rounded grid-rows-16 mx-auto text-center my-auto bg-sky-100 w-fit p-4 mt-[10vh]"
        onSubmit={setRegister}
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
          value={getRegister.name_}
          name="name"
          onChange={(e) => handleInput(e)}
          required
        />

        <br />

        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          2n name:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="text"
          value={getRegister.secondname}
          name="secondname"
          onChange={(e) => handleInput(e)}
          required
        />

        <br />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Email:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="email"
          name="email"
          value={getRegister.email}
          onChange={(e) => handleInput(e)}
          required
        />

        <br />
        <label className="block  py-5 tracking-tight text-3xl font-medium">
          Password:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="password"
          name="password"
          value={getRegister.password}
          onChange={(e) => handleInput(e)}
          required
        />

        <br />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Confirm Password:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="password"
          value={getRegister.confirmPassword}
          name="confirmPassword"
          onChange={(e) => handleInput(e)}
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
