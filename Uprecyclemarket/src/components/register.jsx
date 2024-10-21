import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
    <form onSubmit={handleRegister} className="row g-3 needs-validation" noValidate>
      {/* Name Field */}
      <div className="col-md-12">
        <label className="form-label">First Name</label>
        <div>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
        </div>
      </div>
      <div className="col-md-12">
        <label className="form-label">Last Name</label>
        <div>
        <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
        />
        </div>
      </div>
      
      <div className="col-md-12">
        <label className="form-label">Email</label>
        <div>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
      </div>

      <div className="col-md-12">
        <label className="form-label">Passowrd</label>
        <div>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="col-12 d-flex justify-content-center">
        <button className="btn btn-success " type="submit">Submit form</button>
      </div>

      <div className="col-12 d-flex justify-content-center">
      Already registered <a href="/login">Login</a>
      </div>
    </form>
</div>

  );
}
export default Register;
