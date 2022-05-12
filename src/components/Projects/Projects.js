import Project from "./Project";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={classes["projects"]}>
      <div className={classes["projects__label"]}>
        <h1>Projects</h1>
      </div>
      <Project
        imagePath="/assets/learning-system.png"
        imageAlt="E-learning platform"
        projectName="E-learning platform"
        projectUrl="https://learning-system-react.herokuapp.com/"
      >
        A web application for remote learning, developed in React, Spring and MySql
        database with built in Cisco Webex integration. It supports polish and english
        language. The platform enables creation of educational materials (lessons), 
        making and participation in exams or assignments, progress tracking. 
        It also provides possibility to conduct online meetings with the use of Cisco Webex interface. 
        It supports 2 roles: teacher and student. Uses JWT authentication and authorization.
      </Project>
      <Project
        even={true}
        imagePath="/assets/pms.png"
        imageAlt="Property managment system"
        projectName="Property managment system"
        projectUrl="https://pms-vue.herokuapp.com/en/"
      >
        A web application for managing and renting properties. Developed in Vue, Spring and MySql database.
        It has built in Stripe payments and OAuth authentication with Google. <span style={{color: "red"}}>
        Please note OAuth is disabled as I can't guarantee security of your data. </span>
        Made with collaboration with my academic friend. It supports 2 roles: landlord and client. 
        Landlord can share properties with different features (like price for a night, 
        number of places to sleep, etc.). Client can rent apartment at certain period of time and pay 
        for it using Stripe payment provider. It support 2 languages: polish and english. 
      </Project>
      <Project
        imagePath="/assets/GitHub_Logo.png"
        imageAlt="Github projects"
        projectName="GitHub"
        projectUrl="https://github.com/hubert123490"
      >
       I've also developed smaller desktop and mobile applications. You can check them out by visiting 
       my GitHub page. 
      </Project>
    </div>
  );
};

export default Projects;
