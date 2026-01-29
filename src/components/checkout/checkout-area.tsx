"use client";
import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
// internal
import ErrorMsg from "../common/error-msg";
import CheckoutCouponForm from "./checkout-coupon-form";
import CheckoutOrderReview from "./checkout-order-review";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { clearCart } from "@/redux/features/cart";
import { COUNTRIES } from "@/data/countries";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  agreement: boolean;
};

const cardNumberRegex = /^\d{13,19}$/;
const cvvRegex = /^\d{3,4}$/;

const schema = yup.object().shape({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().min(4).label("Phone"),
  country: yup.string().required().label("Country"),
  address: yup.string().required().label("Address"),
  city: yup.string().required().label("City"),
  state: yup.string().required().label("State"),
  zipCode: yup.string().required().label("Zip Code"),
  cardName: yup
    .string()
    .required("Name on card is required")
    .label("Name on card"),
  cardNumber: yup
    .string()
    .required("Card number is required")
    .transform((v) => (typeof v === "string" ? v.replace(/\D/g, "") : v))
    .matches(cardNumberRegex, "Card number must be 13–19 digits")
    .label("Card number"),
  expiryMonth: yup
    .string()
    .required("Expiry month is required")
    .length(2, "Use MM (01–12)")
    .matches(/^(0[1-9]|1[0-2])$/, "Invalid month (01–12)")
    .label("Expiry month"),
  expiryYear: yup
    .string()
    .required("Expiry year is required")
    .transform((v) => (typeof v === "string" ? v.trim() : v))
    .matches(/^\d{2}$|^\d{4}$/, "Use YY or YYYY")
    .label("Expiry year"),
  cvv: yup
    .string()
    .required("CVV is required")
    .transform((v) => (typeof v === "string" ? v.replace(/\D/g, "") : v))
    .matches(cvvRegex, "CVV must be 3 or 4 digits")
    .label("CVV"),
  agreement: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .label("Agreement"),
});

const CheckoutArea = () => {
  const [openCoupon, setOpenCoupon] = useState<boolean>(false);
  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const processingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { cart_products } = useAppSelector((state) => state.cart);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      agreement: false,
      expiryMonth: "",
      expiryYear: "",
      cardNumber: "",
    },
  });

  const expiryMonth = watch("expiryMonth");
  const expiryYear = watch("expiryYear");

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 19);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  const formatExpiryDisplay = () => {
    const m = expiryMonth || "";
    const y = expiryYear || "";
    if (m.length === 2 && y.length > 0) return `${m}/${y}`;
    return m + y;
  };

  useEffect(() => {
    return () => {
      if (processingTimeoutRef.current)
        clearTimeout(processingTimeoutRef.current);
    };
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (!cart_products.length) return;
    setShowProcessingModal(true);
    processingTimeoutRef.current = setTimeout(() => {
      if (processingTimeoutRef.current)
        clearTimeout(processingTimeoutRef.current);
      processingTimeoutRef.current = null;
      dispatch(clearCart());
      reset();
      setShowProcessingModal(false);
      router.push("/shop");
    }, 5000);
  });

  return (
    <div className="checkout-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
      <div className="container">
        <div className="checkout-toggle-area mb-80 md-mb-60">
          <p>
            Have a promo code?
            <button
              className="d-inline-block"
              data-bs-toggle="collapse"
              data-bs-target="#promo-code"
              onClick={() => setOpenCoupon(!openCoupon)}
            >
              Click to enter your code.
            </button>
          </p>
          <div
            id="promo-code"
            className={`collapse ${openCoupon ? "show" : ""}`}
          >
            <p>Please enter your promo code below.</p>
            <CheckoutCouponForm />
          </div>
        </div>
        <form onSubmit={onSubmit} className="checkout-form">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="main-title">Billign Details</h2>
              <div className="user-profile-data">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-55">
                      <input
                        type="text"
                        id="firstName"
                        {...register("firstName")}
                        placeholder="First Name*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.firstName?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-55">
                      <input
                        type="text"
                        id="lastName"
                        {...register("lastName")}
                        placeholder="Last Name*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.lastName?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-55">
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Email Address*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.email?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-55">
                      <input
                        type="text"
                        id="phone"
                        {...register("phone")}
                        placeholder="Phone Number*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.phone?.message!} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-55">
                      <select
                        className="theme-select-menu"
                        id="country"
                        {...register("country")}
                      >
                        <option value="">Country*</option>
                        {COUNTRIES.map(({ code, name }) => (
                          <option key={code} value={code}>
                            {name}
                          </option>
                        ))}
                      </select>
                      <ErrorMsg msg={errors.country?.message!} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-55">
                      <input
                        type="text"
                        id="address"
                        {...register("address")}
                        placeholder="Street Address*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.address?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-55">
                      <input
                        type="text"
                        id="city"
                        {...register("city")}
                        placeholder="Town/City*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.city?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-55">
                      <input
                        type="text"
                        id="state"
                        {...register("state")}
                        placeholder="State*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.state?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-55">
                      <input
                        type="text"
                        id="zipCode"
                        {...register("zipCode")}
                        placeholder="Zip Code*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.zipCode?.message!} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5 ms-auto">
              <div className="order-confirm-sheet md-mt-60">
                <h2 className="main-title">Order Details</h2>
                <div className="order-review">
                  {/* order review */}
                  <CheckoutOrderReview />
                  {/* order review */}
                  <div className="payment-option">
                    <h5 className="mb-3">Credit Card</h5>
                    <ul className="payment-list style-none">
                      <li className="credit-card-form show">
                        <div className="row">
                          <div className="col-12 mb-3">
                            <h6>Name on card</h6>
                            <input
                              type="text"
                              {...register("cardName")}
                              placeholder="Full name as on card"
                              className={`single-input-wrapper ${errors.cardName ? "is-invalid" : ""}`}
                            />
                            <ErrorMsg msg={errors.cardName?.message} />
                          </div>
                          <div className="col-12 mb-3">
                            <h6>Card number</h6>
                            <Controller
                              name="cardNumber"
                              control={control}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  inputMode="numeric"
                                  autoComplete="cc-number"
                                  placeholder="0000 0000 0000 0000"
                                  className={`single-input-wrapper ${errors.cardNumber ? "is-invalid" : ""}`}
                                  value={field.value}
                                  onChange={(e) => {
                                    const formatted = formatCardNumber(
                                      e.target.value,
                                    );
                                    field.onChange(formatted);
                                  }}
                                />
                              )}
                            />
                            <ErrorMsg msg={errors.cardNumber?.message} />
                          </div>
                          <div className="col-12 mb-3">
                            <h6>Expiry (MM/YY)</h6>
                            <input
                              type="text"
                              inputMode="numeric"
                              autoComplete="cc-exp"
                              placeholder="MM/YY"
                              maxLength={5}
                              className={`single-input-wrapper ${errors.expiryMonth || errors.expiryYear ? "is-invalid" : ""}`}
                              value={formatExpiryDisplay()}
                              onChange={(e) => {
                                const v = e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 4);
                                let month = v.slice(0, 2);
                                const year = v.slice(2, 4);
                                if (month.length === 1 && month !== "0")
                                  month = "0" + month;
                                setValue("expiryMonth", month, {
                                  shouldValidate: true,
                                });
                                setValue("expiryYear", year, {
                                  shouldValidate: true,
                                });
                              }}
                            />
                            <ErrorMsg
                              msg={
                                errors.expiryMonth?.message ||
                                errors.expiryYear?.message
                              }
                            />
                          </div>
                          <div className="col-12 mb-3">
                            <h6>CVV</h6>
                            <input
                              type="text"
                              {...register("cvv")}
                              placeholder="3 or 4 digits"
                              maxLength={4}
                              className={`single-input-wrapper ${errors.cvv ? "is-invalid" : ""}`}
                            />
                            <ErrorMsg msg={errors.cvv?.message} />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className="policy-text">
                    Your personal data will be use for your order, support your
                    experience through this website & for other purpose
                    described in our privacy policy
                  </p>
                  <div className="agreement-checkbox">
                    <input
                      type="checkbox"
                      id="agreement"
                      {...register("agreement")}
                    />
                    <label htmlFor="agreement">
                      I have read and agree to the website terms and conditions*
                    </label>
                    <ErrorMsg msg={errors.agreement?.message} />
                  </div>
                  <button type="submit" className="btn-ten tran3s w-100">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Order processing modal */}
      {showProcessingModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div
            className="bg-white rounded-3 shadow-lg p-5 text-center mx-3"
            style={{ maxWidth: "400px" }}
          >
            <div
              className="spinner-border text-primary mb-4"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <h5 className="fw-bold mb-3">Order processing</h5>
            <p className="text-muted mb-0 small">
              We would send a verification code to your email or phone number to
              verify before charging your card.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutArea;
