import classes from "./AboutRedirect.module.scss"
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const AboutRedirect = () => {
    const navigation = useNavigate();

    const navHandler = () => {
        navigation("/about")
        window.scrollTo(0, 0);
    }

    return <>
    <div className={classes["main"]}>
        <div><h1>About me</h1></div>
        <div>Please visit about page if u want to learn more about my working experience, skills and other things</div>
        
              <Button class={classes["button"]} onClick={navHandler}>Go to About Page</Button>
    </div>
    </>
}

export default AboutRedirect;