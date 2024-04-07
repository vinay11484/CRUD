import React from "react";

export default function Form() {
  return (
    <div className="">
      <div className="text-center bg-yellow-100 py-2  my-2 text-lg font-bold mb-8">
        Form handling
      </div>
      <div className="flex flex-col text-center bg-slate-400 w-5/12 ml-auto mr-auto">
        <form></form>
        <div>
          <label className="inline-block w-32">Name</label>
          <input type="text" className="p-1 m-3 w-60"></input>
        </div>
        <div>
          <label className="inline-block w-32">Phone</label>
          <input type="number" className="p-1 m-3 w-60"></input>
        </div>
        <div>
          <label className="inline-block w-32">Email</label>
          <input type="email" className="p-1 m-3 w-60"></input>
        </div>
      </div>
    </div>
  );
}
