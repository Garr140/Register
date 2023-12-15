import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-auto bg-sky-200 p-5">
        <Link className="p-2" to={"/"}>
          Home
        </Link>
        <Link className="p-2" to={"./Login"}>
          Logout
        </Link>
      </div>
      <h1 className="text-center">Home</h1>
    </div>
  );
};

export default Home;
