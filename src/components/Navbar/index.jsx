"use client";
import React, { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/AuthContext";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { logOut } = useAuth();

  const LogOut = () => {
    logOut();
  };

  return (
    <header className="w-full fixed z-10 bg-black">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          LOGO
        </a>
        <ul className="hidden md:flex text-white gap-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/recipes">Explore</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
        </ul>
        <Button
          title="LogOut"
          handleClick={LogOut}
          containerStyle="hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-cyan-600 rounded-full min-w-[130px]"
        />
        <button
          className="block md:hidden text-white gap-6"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </nav>
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}
      >
        <a href="/home">Home</a>
        <a href="/recipes">Recipes</a>
        <a href="/favorites">Favorites</a>
      </div>
    </header>
  );
};

export default Navbar;
