"use client";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const NewUser = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    passwordCheck: ""
  });

  const onSubmition = async (e) => {
    e.preventDefault();
    const {passwordCheck, ...signUp} = newUser;
    if(passwordCheck != signUp.password) {
      alert('Passwords must match');
      return;
    }

    try {
      const result = await axios.post("http://localhost:3031/users", signUp);
      alert("New user created and already logged in!");
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <div className="glass-card">
      <h1 className="text-4xl text-white font-bold text-center mb-6">
        Register
      </h1>
      <form onSubmit={onSubmition}>
        <div className="relative my-4">
          <input type="text" name="username" className="custom-input peer" placeholder="" onChange={onValueChange} />
          <label htmlFor="username" className="moving-label">
            Username
          </label>
          <FontAwesomeIcon
            icon={faUser}
            size="1x"
            className="absolute top-4 right-4"
          />
        </div>
        <div className="relative my-4">
          <input type="password" name="password" className="custom-input peer" placeholder="" onChange={onValueChange} />
          <label htmlFor="password" className="moving-label">
            Your Password
          </label>
          <FontAwesomeIcon
            icon={faLock}
            size="1x"
            className="absolute top-4 right-4"
          />
        </div>
        <div className="relative my-4">
          <input type="password" name="passwordCheck" className="custom-input peer" placeholder="" onChange={onValueChange} />
          <label htmlFor="password-check" className="moving-label">
            Confirm Password
          </label>
          <FontAwesomeIcon
            icon={faLock}
            size="1x"
            className="absolute top-4 right-4"
          />
        </div>
        <button type="submit" className="primary-button">
          Sign Up
        </button>
        <span>
          Already an User?{" "}
          <Link href="/" className="text-white/50 font-bold underline">
            Sign In
          </Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default NewUser;
