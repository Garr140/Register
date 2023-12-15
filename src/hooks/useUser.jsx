import { useEffect, useState } from "react";

const useUser = (navigate) => {
    const [name_, setName] = useState("");
    const [secondname, setSecondname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const setLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8000/user/?email=" + email)
                .then((res) => {
                    console.log(res);
                    return res.json();

                })
                .then((res) => {
                    //console.log(resp);
                    if (Object.keys(res).lenght === 0) {
                        alert("Please enter valid email");
                    } // else {
                    //     if (resp.password === password) {
                    //       alert("success");
                    //       navigate("/home");
                    //     } else {
                    //       alert("Please enter valid password");
                    //     }
                    //   }

                    alert("success");
                })
                .catch((err) => {
                    console.log("Login failed due to: " + err.message);
                    alert("Login failed due to: " + err.message);
                });
        }
    };

    const getLogin = () => {
        return { email, password };
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

    const handleNameUpdate = (name) => {
        setName(name);
    }

    const handleSecondnameUpdate = (secondname) => {
        setSecondname(secondname);
    }

    const handleEmailUpdate = (email) => {
        setEmail(email);
    }

    const handlePasswordUpdate = (password) => {
        setPassword(password);
    }

    const handleConfirmPasswordUpdate = (confirmPassword) => {
        setConfirmPassword(confirmPassword);
    }

    const handleInput = (e) => {
        switch (e.target.name) {
            case "name":
                handleNameUpdate(e.target.value);
                break;
            case "secondname":
                handleSecondnameUpdate(e.target.value);
                break;
            case "email":
                handleEmailUpdate(e.target.value);
                break;
            case "password":
                handlePasswordUpdate(e.target.value);
                break;
            case "confirmPassword":
                handleConfirmPasswordUpdate(e.target.value);
                break;
            default:
                break;
        }
    };



    const setRegister = (e) => {
        e.preventDefault();
    
        let newUser = { name_, secondname, email, password, confirmPassword };
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
      
    const getRegister = () => {
        return { name_, secondname, email, password, confirmPassword };
    }

    useEffect(() => {
        console.log(getRegister());
    }, [name_, secondname, email, password, confirmPassword]);

    return { setLogin, handleInput, getLogin, setRegister, getRegister };


}

export default useUser;