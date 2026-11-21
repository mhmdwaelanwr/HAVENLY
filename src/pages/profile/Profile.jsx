import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { authService } from "../../services/authService";
import { ROLES } from "../../utils/roles";

const PHONE_PATTERN = /^\+?\d{10,15}$/;

const ROLE_LABELS = {
  [ROLES.MEMBER]: "Property seeker",
  [ROLES.OWNER]: "Owner / Agent",
  [ROLES.ADMIN]: "Admin",
};

function validate(form) {
  const errors = {};
  if (!form.full_name.trim()) errors.full_name = "Full name is required";
  else if (form.full_name.trim().length < 3)
    errors.full_name = "Name must be at least 3 characters";
  if (!form.phone.trim()) errors.phone = "Phone number is required";
  else if (!PHONE_PATTERN.test(form.phone.trim()))
    errors.phone = "Enter a valid phone number";
  return errors;
}

const inputClass =
  "w-full rounded-lg border border-[#D9C6A8] bg-white px-3.5 py-3 text-base text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#6D5339] aria-invalid:border-red-600 disabled:bg-[#F7F4EF] disabled:text-[#6D5339]";

const labelClass = "text-sm font-semibold text-[#1F1F1F]";
const errorClass = "text-sm text-red-700";

const Profile = () => {
  const { user, setUser, logout } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: user?.full_name || "",
    phone: user?.phone || "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  const unchanged =
    form.full_name.trim() === (user?.full_name || "") &&
    form.phone.trim() === (user?.phone || "");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setServerError("");
    setSuccess("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSaving(true);
    setServerError("");
    setSuccess("");
    try {
      const updated = await authService.updateProfile({
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
      });
      setUser(updated);
      setSuccess("Your profile has been updated");
    } catch (err) {
      setServerError(err.message || "Something went wrong, please try again");
    } finally {
      setSaving(false);
    }
  }

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  const initial = (user?.full_name || "?").trim().charAt(0).toUpperCase();

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F7F4EF] px-4 py-10 sm:py-16">
      <section className="w-full max-w-md rounded-2xl border border-[#E6DFD3] bg-white p-6 sm:p-10">
        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1F1F1F] font-serif text-2xl text-white">
            {initial}
          </div>
          <div className="min-w-0">
            <h1 className="truncate font-serif text-2xl text-[#1F1F1F] sm:text-3xl">
              {user?.full_name}
            </h1>
            <p className="text-sm text-[#6D5339]">
              {ROLE_LABELS[user?.role] || user?.role}
            </p>
          </div>
        </div>

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
              type="email"
              value={user?.email || ""}
              disabled
              className={inputClass}
            />
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

          {serverError && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 px-3.5 py-3 text-sm text-red-800"
            >
              {serverError}
            </p>
          )}

          {success && (
            <p
              role="status"
              className="rounded-lg bg-green-50 px-3.5 py-3 text-sm text-green-800"
            >
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={saving || unchanged}
            className="w-full rounded-lg bg-[#1F1F1F] py-3.5 font-semibold text-white transition hover:bg-[#6D5339] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </form>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-4 w-full rounded-lg border border-[#D9C6A8] py-3.5 font-semibold text-[#1F1F1F] transition hover:border-[#6D5339] hover:text-[#6D5339]"
        >
          Log out
        </button>
      </section>
    </main>
  );
};

export default Profile;
