import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { ROLES } from "../../utils/roles";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?\d{10,15}$/;

function validate(form) {
  const errors = {};

  if (!form.full_name.trim()) errors.full_name = "Full name is required";
  else if (form.full_name.trim().length < 3)
    errors.full_name = "Name must be at least 3 characters";

  if (!form.email.trim()) errors.email = "Email is required";
  else if (!EMAIL_PATTERN.test(form.email.trim()))
    errors.email = "Enter a valid email";

  if (!form.phone.trim()) errors.phone = "Phone number is required";
  else if (!PHONE_PATTERN.test(form.phone.trim()))
    errors.phone = "Enter a valid phone number";

  if (!form.password) errors.password = "Password is required";
  else if (form.password.length < 8)
    errors.password = "Password must be at least 8 characters";
  else if (!/[A-Za-z]/.test(form.password) || !/\d/.test(form.password))
    errors.password = "Password must contain letters and numbers";

  if (!form.confirmPassword)
    errors.confirmPassword = "Please confirm your password";
  else if (form.confirmPassword !== form.password)
    errors.confirmPassword = "Passwords do not match";

  return errors;
}

const inputClass =
  "w-full rounded-lg border border-[#D9C6A8] bg-white px-3.5 py-3 text-base text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#6D5339] aria-invalid:border-red-600";

const labelClass = "text-sm font-semibold text-[#1F1F1F]";
const errorClass = "text-sm text-red-700";

const Register = () => {
  const { register, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: ROLES.MEMBER,
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!loading && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setServerError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setServerError("");
    try {
      await register({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        password: form.password,
        role: form.role,
      });
      navigate("/", { replace: true });
    } catch (err) {
      setServerError(err.message || "Something went wrong, please try again");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F7F4EF] px-4 py-10 sm:py-16">
      <section className="w-full max-w-md rounded-2xl border border-[#E6DFD3] bg-white p-6 sm:p-10">
        <h1 className="mb-1 font-serif text-3xl text-[#1F1F1F] sm:text-4xl">
          Create account
        </h1>
        <p className="mb-7 text-[#6D5339]">
          Join HAVENLY to save and list properties
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="full_name" className={labelClass}>
              Full name
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              autoComplete="name"
              value={form.full_name}
              onChange={handleChange}
              aria-invalid={!!errors.full_name}
              aria-describedby={
                errors.full_name ? "full_name-error" : undefined
              }
              className={inputClass}
            />
            {errors.full_name && (
              <span id="full_name-error" className={errorClass}>
                {errors.full_name}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClass}
            />
            {errors.email && (
              <span id="email-error" className={errorClass}>
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClass}
            />
            {errors.phone && (
              <span id="phone-error" className={errorClass}>
                {errors.phone}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="role" className={labelClass}>
              Account type
            </label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className={inputClass}
            >
              <option value={ROLES.MEMBER}>Property seeker</option>
              <option value={ROLES.OWNER}>Owner / Agent</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className={labelClass}>
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                className={`${inputClass} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#6D5339]"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <span id="password-error" className={errorClass}>
                {errors.password}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className={labelClass}>
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={form.confirmPassword}
              onChange={handleChange}
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={
                errors.confirmPassword ? "confirmPassword-error" : undefined
              }
              className={inputClass}
            />
            {errors.confirmPassword && (
              <span id="confirmPassword-error" className={errorClass}>
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {serverError && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 px-3.5 py-3 text-sm text-red-800"
            >
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-[#1F1F1F] py-3.5 font-semibold text-white transition hover:bg-[#6D5339] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#1F1F1F]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#6D5339] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
