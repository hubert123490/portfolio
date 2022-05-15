import classes from "./WorkExperience.module.scss";

const WorkExperience = (props) => {
  return (
    <section
      className={`${classes["experience"]} 
      ${props.alignRight ? classes["right-align"] : ""}`}
    >
      <div className={classes["experience__container"]}>
        <h1 className={classes["experience__title"]}>{props.title}</h1>
        <h2 className={classes["experience__subtitle"]}>
          {props.company}
        </h2>
        <div className={classes["experience__info"]}>
         {props.children}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
