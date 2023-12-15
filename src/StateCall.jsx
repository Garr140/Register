import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const [name, setName] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const register = (email, password) => {
    const handleSubmit = (e) => {
      e.preventDefault();

      let newUser = { name, secondname, email, password, confirmPassword };
      console.log(newUser);

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

      if (password.length < 6) {
        alert("Password must have at least 6 characters");
        return;
      }
      if (password !== confirmPassword) {
        alert("Error: Both passwords must match");
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

    const login = (email, password) => {
      return false;
    };

    const updateDB = () => {};
    return { login, register };
  };
};
export default useUser;
