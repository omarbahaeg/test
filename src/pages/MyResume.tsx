import { FunctionComponent, useCallback } from "react";
import FormContainer1 from "../components/FormContainer1";
import ExpertiseCard from "../components/ExpertiseCard";
import WorkExperienceContainer from "../components/WorkExperienceContainer";
import OperationalProficiencyForm from "../components/OperationalProficiencyForm";
import LanguageProficiencyForm from "../components/LanguageProficiencyForm";
import FilteredCardForm from "../components/FilteredCardForm";
import WorkTogetherContainer from "../components/WorkTogetherContainer";
import Footer from "../components/Footer";
import styles from "./MyResume.module.css";

const MyResume: FunctionComponent = () => {
  const onButtonContainerClick = useCallback(() => {
    window.open("https://www.behance.net/Omar-Bahaa");
  }, []);

  const onUnionClick = useCallback(() => {
    window.open("https://www.behance.net/Omar-Bahaa");
  }, []);

  return (
    <div className={styles.myResume}>
      <FormContainer1 />
      <ExpertiseCard />
      <WorkExperienceContainer />
      <OperationalProficiencyForm />
      <div className={styles.latestPortfolio}>
        <div className={styles.frame}>
          <div className={styles.column}>
            <b className={styles.preTitle}>Recent Projects.</b>
            <div className={styles.title}>
              <b>Latest</b>
              <span>Portfolio</span>
            </div>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <img
              className={styles.unionIcon}
              alt=""
              src="/union.svg"
              onClick={onUnionClick}
            />
          </div>
        </div>
      </div>
      <LanguageProficiencyForm />
      <FilteredCardForm />
      <WorkTogetherContainer />
      <Footer />
    </div>
  );
};

export default MyResume;
