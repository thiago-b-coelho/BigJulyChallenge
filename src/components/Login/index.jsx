"use client";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const onSubmition = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3031/login", login);
      alert(result.data.message);
      const delay = await localStorage.setItem('token', result.data.token)
      router.push("/home");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  return (
    <div className="glass-card">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
      <form onSubmit={onSubmition}>
        <div className="relative my-4">
          <input
            type="text"
            name="username"
            className="custom-input peer"
            placeholder=""
            onChange={onValueChange}
          />
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
          <input
            type="password"
            name="password"
            className="custom-input peer"
            placeholder=""
            onChange={onValueChange}
          />
          <label htmlFor="password" className="moving-label">
            Password
          </label>
          <FontAwesomeIcon
            icon={faLock}
            size="1x"
            className="absolute top-4 right-4"
          />
        </div>
        <button type="submit" className="primary-button">
          Sign In
        </button>
        <span>
          New user?{" "}
          <Link href="/register" className="text-white/50 font-bold underline">
            Sign Up
          </Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
