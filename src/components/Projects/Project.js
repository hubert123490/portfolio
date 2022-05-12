import classes from "./Project.module.scss";

const Project = (props) => {
  const imagePart = (
    <div className={classes["project__image-container"]}>
      <img
        src={props.imagePath}
        alt={props.imageAlt}
        className={classes["project__image"]}
      />
    </div>
  );

  return (
    <div className={classes["project"]}>
      {!props.even && imagePart}
      <div className={props.even ? classes["project__info--rightAlign"] : classes["project__info--leftAlign"]}>
        <h1 className={classes["project__name"]}>{props.projectName}</h1>
        <h2 className={classes["project__subtitle"]}>
          <a href={props.projectUrl} target="_blank" rel="noreferrer">
            {props.projectUrl}
          </a>
        </h2>
        <p className={classes["project__text"]}>{props.children}</p>
      </div>
      {props.even && imagePart}
    </div>
  );
};

export default Project;
