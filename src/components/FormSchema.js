import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string().min(3).max(20).required("name is required"),
  number: Yup.number().min(10).max(10).required("number is requed"),
  email: Yup.string().email().required("email is required"),
});
