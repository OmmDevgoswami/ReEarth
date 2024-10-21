import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Apply styles to the body
    document.body.style.backgroundColor = 'rgba(24, 239, 46, 0.45)';
    document.body.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
    document.body.style.backdropFilter = 'blur(2.5px)';
    document.body.style.webkitBackdropFilter = 'blur(2.5px)';
    document.body.style.borderRadius = '10px';
    document.body.style.border = '1px solid rgba(255, 255, 255, 0.18)';

    return () => {
      // Clean up: Reset body styles when component is unmounted
      document.body.style.backgroundColor = "";
      document.body.style.boxShadow = "";
      document.body.style.backdropFilter = "";
      document.body.style.webkitBackdropFilter = "";
      document.body.style.borderRadius = "";
      document.body.style.border = "";
    };
  }, []);

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
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '70vh', marginLeft : '35%' }} id="outer">
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

        {/* Password Field */}
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
          New user? <a href="/register"> Register Here</a>
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
