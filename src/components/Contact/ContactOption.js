import classes from "./ContactOption.module.scss";

const ContactOption = (props) => {
  return (
    <div>
        <button className={classes["button"]}>
          {props.svg} {props.children}
        </button>
    </div>
  );
};

export default ContactOption;
