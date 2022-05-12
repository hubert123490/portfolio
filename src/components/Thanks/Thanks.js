import classes from "./Thanks.module.scss";

const Thanks = () => {
  return (
    <section className={classes["thanks"]}>
      <div>
        <h1>Thank you very much!</h1>
        <div>I will try to respond as soon as possible.</div>
        <div>Meanwhile check your email for auto reply.</div>
      </div>
    </section>
  );
};

export default Thanks;
