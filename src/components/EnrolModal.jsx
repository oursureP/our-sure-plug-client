import { useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { payWithPaystack } from "../hooks/usePaystack";
import { formatNGN } from "../data/courses";

function EnrolModal({ course, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle | processing | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [reference, setReference] = useState("");

  if (!course) return null;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim().length > 1 && emailValid;
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handlePay = () => {
    if (!canSubmit) return;
    setStatus("processing");
    setErrorMsg("");
    payWithPaystack({
      course,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      onSuccess: (t) => {
        setReference(t.reference);
        setStatus("success");
      },
      onCancel: () => setStatus("idle"),
      onError: (err) => {
        setErrorMsg(err?.message || "Something went wrong. Please try again.");
        setStatus("error");
      },
    });
  };

  const inputClass =
    "mt-1 w-full rounded-xl border border-black/10 px-4 py-3 text-ink outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20";

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-secondary/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl md:p-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg text-ink/50 transition hover:bg-slate-100 hover:text-secondary">
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          <div className="py-4 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/20">
              <CheckCircle2 className="h-8 w-8 text-primary-dark" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-secondary">
              Payment received
            </h3>
            <p className="mt-2 text-ink/70">
              Thank you, {form.name.split(" ")[0]}! Your enrolment in{" "}
              <span className="font-semibold text-secondary">
                {course.title}
              </span>{" "}
              is confirmed.
            </p>
            <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs text-ink/60">
              Reference: <span className="font-mono">{reference}</span>
            </p>
            <p className="mt-3 text-sm text-ink/60">
              We’ll reach out shortly with your next steps — keep this reference
              for your records.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-primary py-3 font-semibold text-secondary transition hover:bg-primary-dark">
              Done
            </button>
          </div>
        ) : (
          <>
            <span className="inline-block rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-secondary">
              {course.badge}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-secondary">
              Enrol in {course.title}
            </h3>
            <p className="mt-1 text-sm text-ink/60">
              You’ll pay{" "}
              <span className="font-semibold text-secondary">
                {formatNGN(course.priceNGN)}
              </span>{" "}
              securely via Paystack.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-secondary">
                  Full name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-secondary">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {form.email && !emailValid && (
                  <p className="mt-1 text-xs text-red-500">
                    Enter a valid email address.
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-secondary">
                  Phone <span className="text-ink/40">(optional)</span>
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="080..."
                  className={inputClass}
                />
              </div>
            </div>

            {status === "error" && (
              <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {errorMsg}
              </p>
            )}

            <button
              onClick={handlePay}
              disabled={!canSubmit || status === "processing"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-secondary transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50">
              {status === "processing" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Processing…
                </>
              ) : (
                <>Pay {formatNGN(course.priceNGN)}</>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-ink/50">
              Secured by Paystack · Cards, bank transfer &amp; USSD
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default EnrolModal;
