import classes from "./ContactOption.module.scss";

const ContactOption = (props) => {
  return (
    <a href={props.link}>
      <button className={classes["button"]}>
        {props.svg} {props.children}
      </button>
    </a>
  );
};

export default ContactOption;
