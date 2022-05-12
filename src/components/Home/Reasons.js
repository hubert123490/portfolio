import classes from "./Reasons.module.scss";

const Reasons = () => {
  return (
    <div className={classes["strap"]}>
      <div className={classes["strap__label"]}>
        <h1>TOP REASONS TO HIRE ME</h1>
        <ul className={classes["strap__label--list"]}>
          <li className={classes["strap__label--list__item"]}>
              <h1>1</h1>
            I enjoy learning new languages, technologies!
          </li>
          <li className={classes["strap__label--list__item"]}>
          <h1>2</h1>
            I know the value of CLEAN CODE, as I've learnt it hard way, while
            maintaining my projects
          </li>
          <li className={classes["strap__label--list__item"]}>
          <h1>3</h1>
            I have strong foundation of algorithms and data structures
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reasons;
