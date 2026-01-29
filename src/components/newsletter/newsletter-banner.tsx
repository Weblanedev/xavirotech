"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { notifySuccess, notifyError } from "@/utils/toast";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterBanner = ({ style_2 = false }: { style_2?: boolean }) => {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
    <>
      <div className="newsletter-banner" suppressHydrationWarning>
        <div className="container">
          <div
            className={`main-wrapper ${style_2 ? "" : "top-border"} bottom-border`}
          >
            <div className="row">
              <div className="col-lg-6">
                <h2 className={`${style_2 ? "" : "text-dark"} fw-bold`}>
                  Our Newsletter.
                </h2>
                <p className="text-lg md-pb-20">
                  Get instant news by subscribe to our daily newsletter
                </p>
              </div>
              <div className="col-lg-6">
                <form
                  action="#"
                  className="m-auto ms-lg-auto"
                  suppressHydrationWarning
                  onSubmit={handleSubmit}
                >
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
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
                    <button type="submit" className="rounded-circle tran3s">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                  {error && (
                    <p className="text-danger small m0 pt-2">{error}</p>
                  )}
                  {/* <p className="text-center text-lg-end m0 pt-5">
                    Already subscribed?{" "}
                    <Link href="#" className="text-dark fw-500">
                      Unsubscribe
                    </Link>
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterBanner;
