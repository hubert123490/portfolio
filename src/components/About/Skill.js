import classes from "./Skill.module.scss"

const Skill = (props) => {
  return (
    <li className={classes["skills__list--item"]}>
        <img src={props.logo} alt="logo"/>
      <div>{props.children}</div>
    </li>
  );
};

export default Skill;
