import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer__container"]}>
        <div className={classes["footer__container--row"]}>
          <div className={classes["footer__container--col"]}>
            <ul>
              <li>Icon</li>
            </ul>
          </div>
          <div className={classes["footer__container--col"]}>
            <ul>
              <li>Icon</li>
            </ul>
          </div>
          <div className={classes["footer__container--col"]}>
            <ul>
              <li>Icon</li>
            </ul>
          </div>
        </div>
        <div className={classes["footer__container--info"]}>
          <div className={classes["footer__container--info__col"]}>
            &copy;{new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
