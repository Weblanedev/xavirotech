"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { notifySuccess, notifyError } from "@/utils/toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required").label("Name"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .label("Email"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .label("Message"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onValid = (_data: FormData) => {
    notifySuccess("Message received! We’ll get back to you shortly.");
    reset();
  };
  const onInvalid = () => {
    notifyError("Please fill in all required fields correctly.");
  };
  const onSubmit = handleSubmit(onValid, onInvalid);
  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Name*</label>
            <input
              type="text"
              placeholder="Your Name*"
              {...register("name")}
              id="name"
              name="name"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label htmlFor="">Email*</label>
            <input
              type="email"
              placeholder="Email Address*"
              {...register("email")}
              id="email"
              name="email"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <textarea
              placeholder="Your message*"
              {...register("message")}
              id="message"
              name="message"
            ></textarea>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.message?.message} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-four tran3s w-100 d-block"
            disabled={!isValid}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
