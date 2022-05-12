import classes from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <form
      className={classes["form"]}
      action="https://formsubmit.co/hubert1234.94@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_subject" value="Job message" />
      <input type="hidden" name="_next" value="https://hubert123490.github.io/portfolio/" />
      <input type="hidden" name="_autoresponse" value="Thanks! I will contact you shortly."></input>
      <div className={classes["form__row"]}>
        <label>Your email address</label>
        <input placeholder="Email address" type="email" name="email" required />
      </div>
      <div className={classes["form__row"]}>
        <label>Full name</label>
        <input placeholder="Full name / company name" type="text" name="name" required />
      </div>
      <div className={classes["form__row"]}>
        <label>Your message</label>
        <textarea placeholder="Type your message here" cols="30" rows="10" name="message" required/>
      </div>
      <button type="submit" className={classes["form__submit"]}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
