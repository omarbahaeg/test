import { FunctionComponent } from "react";
import LanguageFilter from "./LanguageFilter";
import styles from "./LanguageProficiencyForm.module.css";

const LanguageProficiencyForm: FunctionComponent = () => {
  return (
    <div className={styles.languageProficiency}>
      <div className={styles.column}>
        <b className={styles.preTitle}>Linguistic.</b>
        <div className={styles.title}>
          <b>Language</b>
          <span>Proficiency</span>
        </div>
      </div>
      <div className={styles.column1}>
        <LanguageFilter
          language="English"
          languageLabel="First Language"
          dimensionLabel="/assest.svg"
          propGap="160px"
          propBackground="linear-gradient(135deg, #e95841, #e94b63)"
          propGap1="30px"
          propWidth="20px"
          propHeight="20px"
        />
        <LanguageFilter
          language="German"
          languageLabel="Second Language"
          dimensionLabel="/assest1.svg"
          propGap="unset"
          propBackground="unset"
          propBackgroundColor="#bbb"
          propGap1="unset"
          propWidth="14.3px"
          propHeight="15px"
        />
      </div>
    </div>
  );
};

export default LanguageProficiencyForm;
