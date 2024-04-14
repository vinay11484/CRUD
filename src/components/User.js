import React from "react";

export default function (props) {
  console.log(props.formData.id);
  return (
    <tr>
      <td className=" border-2 border-slate-500">{props.formData.id}</td>
      <td className=" border-2 border-slate-500">{props.formData.title}</td>
      <td className=" border-2 border-slate-500">{props.formData.views}</td>
    </tr>
  );
}
