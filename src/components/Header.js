import React from "react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "./Form";
export default function Header() {
  const a = useContext(FormContext);
  console.log("sdbfshjfsih", a);
  return (
    <div className="bg-cyan-100 py-4">
      <ul className="flex flex-row-reverse p-2">
        <li className="p-2 bg-zinc-300 rounded-sm mx-2">
          <Link to={"/getUser"}>Get User</Link>
        </li>
        <li className="p-2 bg-zinc-300 rounded-sm mx-2">
          <Link to={"/addUser"}>Add User</Link>
        </li>
        <li className="p-2 bg-zinc-300 rounded-sm mx-2">
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </div>
  );
}
