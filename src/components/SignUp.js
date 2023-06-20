import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();  
  const [credentials, setCredentials] = useState({name: "", email: "", password: ""});
  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }    
  const handleSubmit = async (e) => {
    const response = await fetch('http://localhost:5000/api/auth/createUser', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password}),
    });
    const json = await response.json();
    console.log(json);
    e.preventDefault();
    if(json.success){
        localStorage.setItem('token', json.authtoken);
        navigate("/");
    }
    else{
        alert("Invalid Credentials");
    }    
  }  
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
            Username
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Jack"
          onChange={onChange}
          minLength={5}
          required
        />
      </div>        
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
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleSubmit} disabled={credentials.name<5||credentials.password<5}>Submit</button>
      </div>
    </div>
  );
};

export default SignUp;
