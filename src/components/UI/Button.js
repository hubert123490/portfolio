import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={props.class || classes["button"]}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
