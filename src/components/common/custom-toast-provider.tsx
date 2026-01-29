"use client";

import React, { useEffect, useState } from "react";
import {
  subscribe,
  removeToast,
  getToasts,
  type ToastItem,
} from "@/lib/toast-store";

export default function CustomToastProvider() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    setItems(getToasts());
    const unsub = subscribe(setItems);
    return unsub;
  }, []);

  if (items.length === 0) return null;

  return (
    <div
      className="custom-toast-container"
      style={{
        position: "fixed",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        pointerEvents: "none",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          role="alert"
          style={{
            padding: "12px 20px",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            background: item.type === "success" ? "#22c55e" : "#ef4444",
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            minWidth: 280,
            maxWidth: "90vw",
            pointerEvents: "auto",
            cursor: "pointer",
          }}
          onClick={() => removeToast(item.id)}
        >
          {item.message}
        </div>
      ))}
    </div>
  );
}
