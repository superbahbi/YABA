import React from "react";
import Form from "../../components/Form";
import Auth from "../../layouts/Auth";
export interface RregisterProps {}

const Register: React.FC<RregisterProps> = () => {
  return (
    <>
      <Auth>
        <Form />
      </Auth>
    </>
  );
};
export default Register;
