import React from "react";

const ErrorMsg = ({ msg }: { msg?: string }) => {
  if (!msg) return null;
  return <div style={{ color: "red" }}>{msg}</div>;
};

export default ErrorMsg;
