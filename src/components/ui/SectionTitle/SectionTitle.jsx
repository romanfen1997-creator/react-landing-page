import "./SectionTitle.scss";

export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="sectionTitle">
            <h2 className="sectionTitle__title">{title}</h2>
            {subtitle ? <p className="sectionTitle__subtitle">{subtitle}</p> : null}
        </div>
    );
}
