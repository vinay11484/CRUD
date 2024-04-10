import React from "react";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
export default function Form() {
  const initialValues = {
    name: "",
    number: "",
    email: "",
  };

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.name = "Required";
  //   } else if (values.name.length > 15) {
  //     errors.firstName = "Must be 15 characters or less";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid email address";
  //   }
  //   console.log(errors);
  //   return errors;
  // };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    // validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.touched);
  console.log(formik.errors);
  return (
    <div className="">
      <div className="text-center bg-yellow-100 py-2  my-2 text-lg font-bold mb-8">
        Form handling
      </div>
      <div className="flex flex-col text-center bg-slate-400 w-5/12 ml-auto mr-auto">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="inline-block w-32 text-left font-bold ">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="p-1 mx-3 mt-12 w-60"
            ></input>
            {formik.touched.name && formik.errors.name ? (
              <div className=" text-red-600  ml-[260px] text-left ">
                {formik.errors.name}
              </div>
            ) : (
              <div> &nbsp;</div>
            )}
          </div>
          <div>
            <label className="inline-block w-32 text-left font-bold">
              Phone
            </label>
            <input
              type="text"
              name="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
              className="p-1 mx-3 w-60"
            ></input>
            {formik.touched.number && formik.errors.number ? (
              <div className=" text-red-600  ml-[260px] text-left ">
                {formik.errors.number}
              </div>
            ) : (
              <div> &nbsp;</div>
            )}
          </div>
          <div>
            <label className="inline-block w-32 text-left font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-1 mx-3  w-60"
            ></input>
            {formik.touched.email && formik.errors.email ? (
              <div className=" text-red-600  ml-[260px] text-left ">
                {formik.errors.email}
              </div>
            ) : (
              <div> &nbsp;</div>
            )}
          </div>
          <div>
            <input type="submit" value="submit" className="mb-12 mt-4"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
