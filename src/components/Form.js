import React, { createContext } from "react";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
import { createBrowserRouter } from "react-router-dom";
export const FormContext = createContext("chaurasia");
import { useMutation } from "@tanstack/react-query";
import Post from "./Post";
export default function Form() {
  const initialValues = {
    id: "",
    title: "",
    views: "",
  };
  const { mutate } = useMutation({
    mutationFn: (newpost) =>
      fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify(newpost),
      }).then((response) => response.json()),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    // validate,
    onSubmit: (values) => {
      mutate(values);
    },
  });
  // console.log(formik.values);
  return (
    <div className="">
      <div className="text-center bg-slate-100 py-4  my-2 text-lg font-bold mb-8">
        Form handling
      </div>
      <div className="flex flex-col text-center bg-slate-50 w-5/12 ml-auto mr-auto mt-32">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="inline-block w-32 text-left font-bold ">Id</label>
            <input
              type="text"
              name="id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.id}
              className="p-1 mx-3 mt-12 w-60 bg-zinc-200 rounded-md"
            ></input>
            {formik.touched.id && formik.errors.id ? (
              <div className=" text-red-600  ml-[260px] text-left ">
                {formik.errors.id}
              </div>
            ) : (
              <div> &nbsp;</div>
            )}
          </div>
          <div>
            <label className="inline-block w-32 text-left font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className="p-1 mx-3 w-60  bg-zinc-200 rounded-md"
            ></input>
            {formik.touched.title && formik.errors.title ? (
              <div className=" text-red-600  ml-[260px] text-left ">
                {formik.errors.title}
              </div>
            ) : (
              <div> &nbsp;</div>
            )}
          </div>
          <div>
            <label className="inline-block w-32 text-left font-bold">
              Views
            </label>
            <input
              type="text"
              name="views"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.views}
              className="p-1 mx-3  w-60  bg-zinc-200 rounded-md"
            ></input>
            {formik.touched.views && formik.errors.views ? (
              <div className=" text-red-600  ml-[260px] text-left ">
                {formik.errors.views}
              </div>
            ) : (
              <div> &nbsp;</div>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="submit"
              className="mb-12 mt-4 bg-zinc-600 font-bold text-white p-2 px-4 rounded-lg"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
