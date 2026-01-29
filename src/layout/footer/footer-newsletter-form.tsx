"use client";
import React, { useState } from "react";
import { notifySuccess, notifyError } from "@/utils/toast";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FooterNewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isEmailValid =
    email.trim().length > 0 && EMAIL_REGEX.test(email.trim());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const input = form.elements.namedItem(
      "newsletter-email",
    ) as HTMLInputElement | null;
    const value = (input?.value ?? "").trim();
    if (!value) {
      setError("Please enter your email address.");
      notifyError("Please enter your email address.");
      return;
    }
    if (!EMAIL_REGEX.test(value)) {
      setError("Please enter a valid email address.");
      notifyError("Please enter a valid email address.");
      return;
    }
    notifySuccess("Email received! We'll send you notifications for updates.");
    setEmail("");
    form.reset();
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        name="newsletter-email"
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (error) setError("");
        }}
        className={error ? "is-invalid" : ""}
        aria-invalid={!!error}
      />
      <button type="submit" disabled={!isEmailValid}>
        <i className="bi bi-arrow-right"></i>
      </button>
      {error && <p className="text-danger small m0 pt-2">{error}</p>}
    </form>
  );
};

export default FooterNewsletterForm;
