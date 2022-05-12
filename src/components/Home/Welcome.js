import classes from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={classes["welcome"]}>
      <div className={classes["welcome__container"]}>
        <div className={classes["welcome__container--section"]}>
        <div className={classes["welcome__container--section__greeting"]}>
            Welcome!
          </div>
          <div className={classes["welcome__container--section__name"]}>
            I am Hubert Kowalczyk
          </div>
          <div className={classes["welcome__container--section__role"]}>
            Aspiring full stack developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
