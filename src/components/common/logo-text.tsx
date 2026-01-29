import React from "react";
import Link from "next/link";

type LogoTextProps = {
  white?: boolean;
  className?: string;
};

const LogoText = ({ white = false, className = "" }: LogoTextProps) => {
  return (
    <Link
      href="/"
      className={`logo-text fw-bold text-uppercase text-decoration-none ${white ? "text-white" : "text-dark"} ${className}`}
      style={{ fontSize: "1.5rem", letterSpacing: "0.02em" }}
    >
      Xaviro
    </Link>
  );
};

export default LogoText;
