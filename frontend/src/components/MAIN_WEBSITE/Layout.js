import react from "react";
import { NavLink, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5">
        <NavBar />
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
}
