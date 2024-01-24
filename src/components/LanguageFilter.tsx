import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LanguageFilter.module.css";

type LanguageFilterType = {
  language?: string;
  languageLabel?: string;
  dimensionLabel?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propBackground?: CSSProperties["background"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propGap1?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const LanguageFilter: FunctionComponent<LanguageFilterType> = ({
  language,
  languageLabel,
  dimensionLabel,
  propGap,
  propBackground,
  propBackgroundColor,
  propGap1,
  propWidth,
  propHeight,
}) => {
  const firstStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const ellipseStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
    };
  }, [propBackground, propBackgroundColor]);

  const skillsStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const assestIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.column}>
      <div className={styles.first} style={firstStyle}>
        <div className={styles.content}>
          <b className={styles.english}>{language}</b>
          <div className={styles.motherLanguage}>{languageLabel}</div>
        </div>
        <div className={styles.level}>
          <div className={styles.ellipse} />
          <div className={styles.ellipse} />
          <div className={styles.ellipse} style={ellipseStyle} />
          <div className={styles.ellipse3} />
          <div className={styles.ellipse3} />
        </div>
      </div>
      <div className={styles.skills} style={skillsStyle}>
        <div className={styles.writing}>
          <img className={styles.assestIcon} alt="" src="/assest.svg" />
          <div className={styles.writing1}>Writing</div>
        </div>
        <div className={styles.writing}>
          <img
            className={styles.assestIcon}
            alt=""
            src={dimensionLabel}
            style={assestIconStyle}
          />
          <div className={styles.writing1}>Reading</div>
        </div>
        <div className={styles.speaking}>
          <img className={styles.assestIcon2} alt="" src="/assest1.svg" />
          <div className={styles.writing1}>Speaking</div>
        </div>
      </div>
    </div>
  );
};

export default LanguageFilter;
