import * as Yup from "yup";

export const FormSchema = Yup.object({
  id: Yup.number().min(1).max(1000).required("id is required"),
  title: Yup.string().min(4).max(20).required("title is requed"),
  views: Yup.number().min(1).max(10000).required("views is required"),
});
