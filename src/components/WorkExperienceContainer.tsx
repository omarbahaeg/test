import { FunctionComponent } from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "./WorkExperienceContainer.module.css";

const WorkExperienceContainer: FunctionComponent = () => {
  return (
    <div className={styles.workExperience}>
      <div className={styles.column}>
        <b className={styles.preTitle}>Career Journey.</b>
        <div className={styles.title}>
          <b>Work</b>
          <span>Experience</span>
        </div>
      </div>
      <div className={styles.frame}>
        <ExperienceCard
          jobTitle="Freelance"
          designerDescription="Freelance Designer"
          designerServices="Freelance designer offering creative services to various clients."
          employmentPeriod="2021 - Present"
          propWidth="265px"
          propBackground="linear-gradient(135deg, #e95841, #e94b63)"
          propBoxShadow="0px 5px 5px rgba(233, 88, 65, 0.16)"
          propColor="#fff"
        />
        <ExperienceCard
          jobTitle="Art Brush"
          designerDescription="Graphic Designer"
          designerServices="Printing company: All printing forms, including packaging, etc."
          employmentPeriod="2020 - 2021"
          propWidth="237px"
          propBackground="unset"
          propBoxShadow="0px 5px 5px rgba(112, 112, 112, 0.15)"
          propBackgroundColor="#e0e0e0"
          propColor="#14192d"
        />
        <ExperienceCard
          jobTitle={`Queen & Prince | Offset Print`}
          designerDescription="Graphic Designer"
          designerServices="Printing company: All printing forms for hotels, companies, etc."
          employmentPeriod="2019 - 2020"
          propWidth="315px"
          propBackground="unset"
          propBoxShadow="0px 5px 5px rgba(112, 112, 112, 0.15)"
          propBackgroundColor="#e0e0e0"
          propColor="#14192d"
        />
        <ExperienceCard
          jobTitle="Watania Advertising"
          designerDescription="Graphic Designer"
          designerServices="Advertising company: All forms of adv for hotels, tourist villages, etc."
          employmentPeriod="2018 - 2019"
          propWidth="237px"
          propBackground="unset"
          propBoxShadow="0px 5px 5px rgba(112, 112, 112, 0.15)"
          propBackgroundColor="#e0e0e0"
          propColor="#14192d"
        />
        <ExperienceCard
          jobTitle="Masria Print Adv."
          designerDescription="Graphic Designer"
          designerServices="Advertising company: All forms of adv, including corporate ads, etc."
          employmentPeriod="2016 - 2018"
          propWidth="237px"
          propBackground="unset"
          propBoxShadow="0px 5px 5px rgba(112, 112, 112, 0.15)"
          propBackgroundColor="#e0e0e0"
          propColor="#14192d"
        />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
    </div>
  );
};

export default WorkExperienceContainer;
