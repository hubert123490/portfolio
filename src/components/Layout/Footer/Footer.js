import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer__container"]}>
            &copy;Made by me
      </div>
    </footer>
  );
};

export default Footer;
