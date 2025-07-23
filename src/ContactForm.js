function ContactForm() {
  return (
    <form className="contact-form">
      <input
        type="email"
        placeholder="Podaj swój email"
        className="contact-form-input"
      />
      <textarea
        placeholder="Wpisz wiadomość"
        className="contact-form-message"
      ></textarea>
    </form>
  );
}

export default ContactForm;
