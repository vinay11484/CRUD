import React, { useContext } from "react";
import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FormContext } from "./Form";
import User from "./User";
import { useNavigate } from "react-router-dom";
export default function Fetch() {
  const navigate = useNavigate();
  const a = useContext(FormContext);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todo"],
    // queryFn: () => Promise.reject("error message"),
    queryFn: () =>
      fetch("http://localhost:3000/posts").then((res) => res.json()),
  });

  console.log(data);
  if (isLoading) return null;
  return (
    <div className="p-8">
      <table className=" border-4 border-slate-500  border-spacing-2 ">
        <tr>
          <th className=" border-2 border-slate-500">Id</th>
          <th className=" borde-2 border-slate-500">Title</th>
          <th className=" border-2 border-slate-500">views</th>
        </tr>
        {data.map((item) => (
          <User key={item.id} formData={item}></User>
        ))}
      </table>
    </div>
  );
}
