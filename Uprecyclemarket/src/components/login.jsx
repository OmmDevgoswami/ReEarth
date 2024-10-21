import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate('/profile');
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
    
  };

  return (
<div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '70vh', marginLeft : '35%'}}>
    <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
      {/* Email Field */}
      <div className="col-md-12">
        <label htmlFor="validationCustomUsername" className="form-label">Email</label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
          <input 
            type="email" 
            className="form-control" 
            id="validationCustomUsername" 
            aria-describedby="inputGroupPrepend" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <div className="invalid-feedback">
            Enter a valid email
          </div>
        </div>
      </div>

      {/* Password Field (now on a new line) */}
      <div className="col-md-12">
        <label htmlFor="validationCustom03" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="validationCustom03" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <div className="invalid-feedback">
          Please provide a valid password
        </div>
      </div>

      {/* Submit Button */}
      <div className="col-12 d-flex justify-content-center">
        <button className="btn btn-success" type="submit">Submit form</button>
      </div>

      <div className="col-12 d-flex justify-content-center">
      New user <a href="/register"> Register Here</a>
      </div>
      <div className="col-12 d-flex justify-content-center">
      {/* Google Sign-In */}
        <SignInwithGoogle />
      </div>

    </form>
</div>
  );
}

export default Login;

