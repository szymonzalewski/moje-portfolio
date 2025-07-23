import Main from "../Main";
import ContactForm from "../ContactForm";
import Button from "../Button";
import "../Contact.css";
import "../Button.css";

const Contact = () => {
  return (
    <Main>
      <section className="contact-section">
        <h1>Kontakt</h1>
        <ContactForm />
        <Button
          className="button-message"
          label="Wyślij widomość"
          onClick={() => {
            alert("Wiadomość została wysłana");
          }}
        />
      </section>
    </Main>
  );
};

export default Contact;
