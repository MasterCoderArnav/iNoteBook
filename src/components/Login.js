import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    let navigate = useNavigate();
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
        });
        const json = await response.json();
        console.log(json);
        e.preventDefault();
        if(json.success){
            window.localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Logged In Successfully", "success");
        }
        else{
            props.showAlert("Invalid Credentials", "danger");
        }
    }
  return (
    <div className="container mu-3">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="name@example.com"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
