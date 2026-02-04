import "./Button.scss";

export default function Button({
                                   as = "a",
                                   variant = "primary",
                                   href,
                                   type,
                                   disabled = false,
                                   onClick,
                                   children,
                               }) {
    const className = `btn btn--${variant} ${disabled ? "is-disabled" : ""}`;

    if (as === "button") {
        return (
            <button className={className} type={type || "button"} disabled={disabled} onClick={onClick}>
                {children}
            </button>
        );
    }

    return (
        <a className={className} href={href} onClick={onClick} aria-disabled={disabled || undefined}>
            {children}
        </a>
    );
}
