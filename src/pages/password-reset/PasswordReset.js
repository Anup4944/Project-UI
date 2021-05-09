import React from "react";
import { PasswordResetForm } from "../../components/password-reset-form/PasswordResetForm";
import "./PasswordReset.css";

const PasswordReset = () => {
  return (
    <div className="password-reset-page">
      <PasswordResetForm />
    </div>
  );
};

export default PasswordReset;
