import { Children, Component } from "react";
import { NavLink, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout({ Children }) {
  return (
    <div className="grid grid-col-1 md:grid-cols-5">
      <div className="col-span-1 md:col-span-5">
        <NavBar />
      </div>
      <div className="m-10">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
