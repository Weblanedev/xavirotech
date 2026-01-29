export type ToastType = "success" | "error";

export type ToastItem = {
  id: string;
  message: string;
  type: ToastType;
};

let toasts: ToastItem[] = [];
const listeners: Array<(t: ToastItem[]) => void> = [];
const AUTO_CLOSE_MS = 3000;

function notify() {
  listeners.forEach((fn) => fn([...toasts]));
}

export function addToast(message: string, type: ToastType) {
  const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  toasts = [...toasts, { id, message, type }];
  notify();
  if (typeof window !== "undefined") {
    setTimeout(() => removeToast(id), AUTO_CLOSE_MS);
  }
  return id;
}

export function removeToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  notify();
}

export function subscribe(listener: (t: ToastItem[]) => void) {
  listeners.push(listener);
  return () => {
    const i = listeners.indexOf(listener);
    if (i !== -1) listeners.splice(i, 1);
  };
}

export function getToasts(): ToastItem[] {
  return [...toasts];
}
