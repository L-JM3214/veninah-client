import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

const proceedLogin = (e) => {
  e.preventDefault();

  if (validate()) {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userCredentials),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          toast.success("Logged in successfully.");

          // Store the token or session identifier in local storage or a cookie
          localStorage.setItem("token", response.token);
          sessionStorage.setItem("username", userCredentials.username);
          sessionStorage.setItem("userrole", response.role);
          navigate("/menu");
        } else {
          toast.error("Failed to log in: " + response.message);
        }
      })
      .catch((err) => {
        toast.error("Failed to log in: " + err.message);
      });
  }
};

  const validate = () => {
    const { username, password } = userCredentials;
    let result = true;

    if (!username || username.trim() === "") {
      result = false;
      toast.warning("Please enter a username");
    }

    if (!password || password.trim() === "") {
      result = false;
      toast.warning("Please enter a password");
    }

    return result;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={proceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  type="text"
                  value={userCredentials.username}
                  onChange={handleChange}
                  name="username"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={userCredentials.password}
                  onChange={handleChange}
                  name="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-footer">
              <Link to="/payment" className="btn btn-primary">
                Login
              </ Link>{" "}
              |{" "}
              <Link className="btn btn-success" to={"/sign_up"}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;