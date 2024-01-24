import { FunctionComponent } from "react";
import styles from "./FilteredCardForm.module.css";

const FilteredCardForm: FunctionComponent = () => {
  return (
    <div className={styles.myInterests}>
      <div className={styles.column}>
        <b className={styles.preTitle}>Hobbies.</b>
        <div className={styles.title}>
          <b>My</b>
          <span>Interests</span>
        </div>
      </div>
      <div className={styles.column1}>
        <div className={styles.frame}>
          <div className={styles.draw}>
            <div className={styles.frame1}>
              <img className={styles.assestIcon} alt="" src="/assest2.svg" />
            </div>
            <b className={styles.preTitle}>Draw</b>
          </div>
          <div className={styles.draw}>
            <div className={styles.frame1}>
              <img className={styles.assestIcon1} alt="" src="/assest3.svg" />
            </div>
            <b className={styles.preTitle}>Music</b>
          </div>
          <div className={styles.draw}>
            <div className={styles.frame1}>
              <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
            </div>
            <b className={styles.preTitle}>Photography</b>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.mma}>
            <div className={styles.frame5}>
              <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
            </div>
            <b className={styles.preTitle}>MMA</b>
          </div>
          <div className={styles.draw}>
            <div className={styles.frame6}>
              <img className={styles.vectorIcon2} alt="" src="/vector12.svg" />
            </div>
            <b className={styles.preTitle}>Swimming</b>
          </div>
          <div className={styles.draw}>
            <div className={styles.frame1}>
              <img className={styles.vectorIcon3} alt="" src="/vector13.svg" />
            </div>
            <b className={styles.preTitle}>Gym</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredCardForm;
