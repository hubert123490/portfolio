import WorkExperience from "./WorkExperience";
import classes from "./WorkExperiences.module.scss";

const WorkExperiences = () => {
  return (
    <div className={classes["experiences"]}>
      <div className={classes["experiences__label"]}>
        <h1>Work experience</h1>
      </div>
      <div className={classes["experiences__blocks"]}>
        <WorkExperience
          title="Backend developer C#/.Net Intern"
          company="Infover - Kielce"
        >
          <ul>
            <li>
              Responsible for writing server-side web application logic,
              developing back-end components (entities, repositories, services,
              controllers and other interfaces based on company architecture)
              and testing created endpoints.
            </li>
            <li>
              Worked in agile methodology consisted of 5 members in lead of
              SCRUM master.
            </li>
            <li>Solving daily tasks assigned through Jira software.</li>
            <li>
              Technologies: ASP.NET, C#, NHibernate, SQLDatabase, Swagger,
              GitHub, Jira.
            </li>
          </ul>
        </WorkExperience>
        <WorkExperience
          alignRight={true}
          title="Computer Technician Intern"
          company="Ceramika Gres - Końskie"
        >
          <ul className={classes["bullets__right"]}>
            <li>
              Responsible for installing, testing, updating computer equipment
              (computers, programs and software) and creating workstations for
              new employees.
            </li>
            <li>Making backups.</li>
            <li>Helping company members with hardware or software issues.</li>
          </ul>
        </WorkExperience>
      </div>
      <div className={classes["experiences__label"]}>
        <h1>Education</h1>
      </div>
      <div className={classes["experiences__blocks"]}>
        <WorkExperience 
        title="BSc. of Computer Science"
        company="Kielce University of Technology">
          <ul>
            <li>Speciallization: information systems.</li>
          </ul>
        </WorkExperience>
      </div>
    </div>
  );
};

export default WorkExperiences;
