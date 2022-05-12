import classes from "./AboutHeader.module.scss";

const AboutHeader = () => {
  return (
    <div className={classes["header"]}>
      <div className={classes["circle"]}>
        <img src="/assets/CV_photo.jpg" alt="CV"/>
      </div>
      <div className={classes["introduction"]}>
        <h1>Introduction</h1>
        <div>Hi my name is Hubert Kowalczyk. I am passionate 
            developer currently working mostly in web. Although I also 
            made smaller android and desktop applications.

        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
