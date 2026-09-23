function ContactItem({ label, value, href, external }) {
  return (
    <div className="contact-item">
      <span className="contact-item__label">{label}</span>
      {href ? (
        <a
          className="contact-item__value"
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {value}
        </a>
      ) : (
        <p className="contact-item__value">{value}</p>
      )}
    </div>
  );
}

export default ContactItem;
