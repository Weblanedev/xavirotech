"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import BackToTopCom from "@/components/common/back-to-top-com";
import CustomToastProvider from "@/components/common/custom-toast-provider";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { initialOrderQuantity } from "@/redux/features/cart";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Load bootstrap JS only on client (avoid hydration mismatches)
    import("bootstrap/dist/js/bootstrap").catch(() => {});
    animationCreate();
  }, []);
  useEffect(() => {
    dispatch(initialOrderQuantity());
  }, [router, dispatch]);

  return (
    <>
      {children}
      <BackToTopCom />
      <CustomToastProvider />
    </>
  );
};

export default Wrapper;
