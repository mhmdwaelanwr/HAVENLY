import { useState } from "react";
import { FiUploadCloud, FiX } from "react-icons/fi";
import { PROPERTY_TYPES, propertySchema, validateImageFile } from "./propertySchema";

const empty = {
  title: "", location: "", purpose: "buy", type: "", price: "", bedrooms: "", bathrooms: "",
  area: "", description: "", status: "Published", featured: false, image: "",
};

// Shrinks uploads so they fit comfortably in browser storage.
function resizeImage(file, maxSize = 1200) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read the image"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("This file is not a valid image"));
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function Field({ label, error, children, className = "" }) {
  return (
    <label className={"form-field " + className}>
      <span className="form-label">{label}</span>
      {children}
      {error && <span className="form-error" role="alert">{error}</span>}
    </label>
  );
}

export default function PropertyForm({ initialValues, submitLabel, onSubmit }) {
  const [values, setValues] = useState({ ...empty, ...initialValues });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [saving, setSaving] = useState(false);
  const [dragging, setDragging] = useState(false);

  function set(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  }

  const input = (name, props = {}) => ({
    name,
    value: values[name],
    onChange: (e) => set(name, e.target.value),
    "aria-invalid": Boolean(errors[name]),
    className: "form-input",
    ...props,
  });

  async function handleFile(file) {
    if (!file) return;
    const problem = validateImageFile(file);
    if (problem) return setErrors((e) => ({ ...e, image: problem }));
    try {
      set("image", await resizeImage(file));
    } catch (err) {
      setErrors((e) => ({ ...e, image: err.message }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");
    const result = propertySchema.safeParse(values);
    if (!result.success) {
      const next = {};
      for (const issue of result.error.issues) next[issue.path[0]] ??= issue.message;
      setErrors(next);
      return;
    }
    setSaving(true);
    try {
      await onSubmit(result.data);
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
      setSaving(false);
    }
  }

  return (
    <form className="property-form" onSubmit={handleSubmit} noValidate>
      <section className="form-section">
        <h2 className="form-section-title">Property image</h2>
        {values.image ? (
          <div className="image-preview">
            <img src={values.image} alt="Property preview" />
            <button type="button" className="image-remove" onClick={() => set("image", "")} aria-label="Remove image">
              <FiX />
            </button>
          </div>
        ) : (
          <label
            className={"image-drop" + (dragging ? " is-dragging" : "") + (errors.image ? " has-error" : "")}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          >
            <FiUploadCloud size={28} aria-hidden="true" />
            <span className="font-medium">Click or drag an image here</span>
            <span className="form-hint">JPG, PNG or WebP · up to 5 MB</span>
            <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only"
              onChange={(e) => handleFile(e.target.files[0])} />
          </label>
        )}
        {errors.image && <p className="form-error" role="alert">{errors.image}</p>}
      </section>

      <section className="form-section form-grid">
        <h2 className="form-section-title col-span-full">Details</h2>
        <Field label="Title" error={errors.title} className="col-span-full">
          <input {...input("title", { placeholder: "Modern Luxury Villa", maxLength: 100 })} />
        </Field>
        <Field label="Location" error={errors.location} className="col-span-full">
          <input {...input("location", { placeholder: "New Cairo, Egypt", maxLength: 120 })} />
        </Field>
        <Field label="Purpose" error={errors.purpose}>
          <select {...input("purpose")}>
            <option value="buy">For sale</option>
            <option value="rent">For rent</option>
          </select>
        </Field>
        <Field label="Property type" error={errors.type}>
          <select {...input("type")}>
            <option value="">Select type</option>
            {PROPERTY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Price (EGP)" error={errors.price}>
          <input {...input("price", { type: "number", min: 0, inputMode: "numeric", placeholder: "8500000" })} />
        </Field>
        <Field label="Area (m²)" error={errors.area}>
          <input {...input("area", { type: "number", min: 0, placeholder: "320" })} />
        </Field>
        <Field label="Bedrooms" error={errors.bedrooms}>
          <input {...input("bedrooms", { type: "number", min: 0, placeholder: "4" })} />
        </Field>
        <Field label="Bathrooms" error={errors.bathrooms}>
          <input {...input("bathrooms", { type: "number", min: 0, placeholder: "3" })} />
        </Field>
        <Field label="Description (optional)" error={errors.description} className="col-span-full">
          <textarea {...input("description", { rows: 4, maxLength: 1000 })} />
        </Field>
      </section>

      <section className="form-section form-grid">
        <h2 className="form-section-title col-span-full">Visibility</h2>
        <Field label="Status" error={errors.status}>
          <select {...input("status")}>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </Field>
        <label className="form-check">
          <input type="checkbox" checked={values.featured} onChange={(e) => set("featured", e.target.checked)} />
          <span>Show in featured properties</span>
        </label>
      </section>

      {submitError && <p className="form-error" role="alert">{submitError}</p>}
      <button type="submit" className="form-submit" disabled={saving}>
        {saving ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
