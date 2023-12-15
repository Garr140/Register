
import logo from "./assets/react.svg";
import { Link } from "react-router-dom";

// hooks
import useUser from "./hooks/useUser";

// const navigate = useNavigate;

const Login = () => {

  const {setLogin, handleInput, getLogin} = useUser();

  return (
    <div className=" grid-rows-16 w-screen h-screen fixed text-center">
      <form
        className=" shadow-md rounded grid-rows-16 mx-auto text-center my-auto bg-sky-100 w-fit p-4 mt-[25vh]"
        onSubmit={setLogin}
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
          value={getLogin.email}
          name="email"
          onChange={(e) => handleInput(e)}
        />

        <br />
        <label className="block  py-5 tracking-tight text-3xl font-medium">
          Password:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="password"
          value={getLogin.password}
          name="password"
          onChange={(e) => handleInput(e)}
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
