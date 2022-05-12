import ContactOptions from "./ContactOptions";
import classes from "./Contact.module.scss";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section>
      <div className={classes["label"]}>
        <h1>Contact me!</h1>
      </div>
      <div className={classes["container"]}>
        <div className={classes["options"]}>
          <ContactOptions />
        </div>
        <div className={classes["form"]}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
