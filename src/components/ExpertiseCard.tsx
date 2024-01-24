import { FunctionComponent } from "react";
import styles from "./ExpertiseCard.module.css";

const ExpertiseCard: FunctionComponent = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
          </div>
          <b className={styles.yearsJob}>+5 Years Expertise</b>
        </div>
        <div className={styles.frame1}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon1} alt="" src="/vector8.svg" />
          </div>
          <b className={styles.yearsJob}>Graphic Proficiency</b>
        </div>
        <div className={styles.frame1}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon2} alt="" src="/vector9.svg" />
          </div>
          <b className={styles.yearsJob}>Innovative Design</b>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
