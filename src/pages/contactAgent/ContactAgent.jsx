import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findProperty, formatPrice } from "../../data/properties";

const fields = [
  { name: "fullName", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { name: "message", label: "Message" },
];

const emptyForm = { fullName: "", email: "", phone: "", message: "" };

function EnquiryForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};

    fields.forEach(({ name, label }) => {
      if (!values[name].trim()) nextErrors[name] = `${label} is required.`;
    });
    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address, such as name@example.com.";
    }

    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      event.currentTarget.elements.namedItem(firstError).focus();
      return;
    }

    setValues(emptyForm);
    setSubmitted(true);
  }

  return (
    <form className="property-panel p-5 sm:p-7" onSubmit={handleSubmit} noValidate>
      <h2 className="text-xl font-semibold">Your enquiry</h2>
      <p className="property-muted mt-2 mb-6 text-sm">Demo form. Submitting it won’t send a message. All fields are required.</p>

      <div className="space-y-4">
        {fields.map(({ name, label, type, autoComplete }) => {
          const inputId = `enquiry-${name}`;
          const errorId = `${inputId}-error`;
          const inputProps = {
            id: inputId,
            name,
            value: values[name],
            onChange: handleChange,
            required: true,
            "aria-invalid": Boolean(errors[name]),
            "aria-describedby": errors[name] ? errorId : undefined,
            className: "property-input",
          };

          return (
            <div key={name}>
              <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold">{label}</label>
              {name === "message" ? (
                <textarea {...inputProps} rows={4} />
              ) : (
                <input {...inputProps} type={type} autoComplete={autoComplete} />
              )}
              <div aria-live="polite">
                {errors[name] && <p id={errorId} className="property-error mt-1 text-sm">{errors[name]}</p>}
              </div>
            </div>
          );
        })}
      </div>

      <button type="submit" className="property-button property-primary mt-5 w-full sm:w-auto">Submit Demo Enquiry</button>
      <div role="status">
        {submitted && <p className="property-success mt-4 rounded-lg px-4 py-3 text-sm">Demo enquiry submitted. No message was sent.</p>}
      </div>
    </form>
  );
}

export default function ContactAgent() {
  const { id } = useParams();
  const property = findProperty(id);
  const agent = property?.agent;

  return (
    <main className="property-theme property-page">
      <div className="mx-auto max-w-5xl">
        <Link to={property ? `/properties/${property.id}` : "/properties"} className="property-link text-sm">
          {property ? "Back to Property Details" : "Back to Properties"}
        </Link>
        <h1 className="property-heading mt-4 mb-6">{property ? "Contact Agent" : "Property not found"}</h1>
        {property && (
          <div className="grid items-start gap-6 md:grid-cols-[1fr_1.5fr]">
            <aside className="property-panel overflow-hidden" aria-label="Property and agent information">
              <img src={property.image} alt={property.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h2 className="text-lg font-semibold">{property.title}</h2>
                <p className="property-muted mt-1 text-sm">{property.location}</p>
                <p className="mt-2 font-bold">{formatPrice(property.price)}</p>
                <div className="property-divider mt-4 pt-4">
                  <h3 className="font-semibold">Agent details</h3>
                  {agent?.name || agent?.email || agent?.phone ? (
                    <div className="property-muted mt-1 space-y-1 text-sm break-words">
                      {agent.name && <p>{agent.name}</p>}
                      {agent.email && <p>{agent.email}</p>}
                      {agent.phone && <p>{agent.phone}</p>}
                    </div>
                  ) : (
                    <p className="property-muted mt-1 text-sm">Agent details are unavailable for this listing.</p>
                  )}
                </div>
              </div>
            </aside>
            <EnquiryForm key={property.id} />
          </div>
        )}
      </div>
    </main>
  );
}
