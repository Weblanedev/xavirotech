import { addToast } from "@/lib/toast-store";

export function notifySuccess(message: string) {
  addToast(message, "success");
}

export function notifyError(message: string) {
  addToast(message, "error");
}
