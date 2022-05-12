import Welcome from "./Welcome";
import Reasons from "./Reasons";
import Projects from "../Projects/Projects";
import AboutRedirect from "./AboutRedirect";
import Contact from "../Contact/Contact";
import classes from "./Home.module.scss"

const Home = () => {
  return (
    <>
      <Welcome />
      <Reasons />
      <Projects />
      <AboutRedirect />
      <div className={classes["contact"]}><Contact/></div>
    </>
  );
};

export default Home;
