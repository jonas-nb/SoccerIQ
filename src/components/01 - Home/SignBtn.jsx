import React from "react";
import { useNavigate } from "react-router-dom";
const SignBtn = () => {
  const navigate = useNavigate();

  return (
    <div onClick={navigate("cadastro")} className="btn btn-sm btn-secondary">
      Sign In
    </div>
  );
};

export default SignBtn;
