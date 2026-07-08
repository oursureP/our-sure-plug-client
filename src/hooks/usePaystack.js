import PaystackPop from "@paystack/inline-js";
import { toKobo } from "../data/courses";

const PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

export function payWithPaystack({
  course,
  name,
  email,
  phone,
  onSuccess,
  onCancel,
  onError,
}) {
  if (!PUBLIC_KEY) {
    onError?.(new Error("Paystack public key missing."));
    return;
  }

  const popup = new PaystackPop();
  popup.newTransaction({
    key: PUBLIC_KEY,
    email,
    amount: toKobo(course.priceNGN), // kobo
    currency: "NGN",
    reference: `oursureplug-${course.slug}-${Date.now()}`,
    metadata: {
      custom_fields: [
        {
          display_name: "Course",
          variable_name: "course",
          value: course.title,
        },
        {
          display_name: "Student Name",
          variable_name: "student_name",
          value: name,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone || "N/A",
        },
      ],
    },
    onSuccess: (transaction) => onSuccess?.(transaction),
    onCancel: () => onCancel?.(),
    onError: (error) => onError?.(error),
  });
}
