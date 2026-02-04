import {useMemo, useState} from "react";
import Container from "../../layout/Container";
import "./ContactForm.scss";
import SectionTitle from "../../ui/SectionTitle/SectionTitle.jsx";

// Demo-only client-side validation.
// In production, validate on the backend as well (and use a more robust email strategy).
function validate(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = "Name is required.";

    const email = values.email.trim();
    if (!email) errors.email = "Email is required.";

    // Simple email format check for demo purposes (not a full RFC validator).
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email.";

    if (values.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";

    if (!values.agree) errors.agree = "You must accept the terms.";

    return errors;
}

export default function ContactForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
        agree: false,
    });

    const [touched, setTouched] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const errors = useMemo(() => validate(values), [values]);
    const isValid = Object.keys(errors).length === 0;

    const setField = (field, value) => {
        setValues((v) => ({...v, [field]: value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setTouched({name: true, email: true, message: true, agree: true});

        if (!isValid) return;

        setSubmitted(true);
        // Demo: no real API request, just reset the form.
        setValues({name: "", email: "", message: "", agree: false});
    };

    const showError = (field) => touched[field] && errors[field];

    return (
        <section id="contact" className="section contact">
            <Container>
                <SectionTitle
                    title="Contact"
                    subtitle="Send a message (client-side validation demo)."
                />

                {submitted && <div className="contact__success">Thanks! Your message has been submitted.</div>}

                <form className="contact__form" onSubmit={onSubmit} noValidate>
                    <div className="contact__row">
                        <label className="contact__label">
                            Name
                            <input
                                className={`contact__input ${showError("name") ? "is-invalid" : ""}`}
                                value={values.name}
                                onChange={(e) => setField("name", e.target.value)}
                                onBlur={() => setTouched((t) => ({...t, name: true}))}
                            />
                            {showError("name") && <div className="contact__error">{errors.name}</div>}
                        </label>

                        <label className="contact__label">
                            Email
                            <input
                                className={`contact__input ${showError("email") ? "is-invalid" : ""}`}
                                value={values.email}
                                onChange={(e) => setField("email", e.target.value)}
                                onBlur={() => setTouched((t) => ({...t, email: true}))}
                            />
                            {showError("email") && <div className="contact__error">{errors.email}</div>}
                        </label>
                    </div>

                    <label className="contact__label">
                        Message
                        <textarea
                            className={`contact__textarea ${showError("message") ? "is-invalid" : ""}`}
                            value={values.message}
                            onChange={(e) => setField("message", e.target.value)}
                            onBlur={() => setTouched((t) => ({...t, message: true}))}
                            rows={5}
                        />
                        {showError("message") && <div className="contact__error">{errors.message}</div>}
                    </label>

                    <label className="contact__check">
                        <input
                            type="checkbox"
                            checked={values.agree}
                            onChange={(e) => setField("agree", e.target.checked)}
                            onBlur={() => setTouched((t) => ({...t, agree: true}))}
                        />
                        <span>I agree to the terms.</span>
                    </label>
                    {showError("agree") && <div className="contact__error">{errors.agree}</div>}

                    <button className="contact__button" type="submit" disabled={!isValid}>
                        Submit
                    </button>
                </form>
            </Container>
        </section>
    );
}
