import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./src/components/Form";
const AppLayout = () => {
  return (
    <div>
      <Form></Form>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
