import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ExperienceCard.module.css";

type ExperienceCardType = {
  jobTitle?: string;
  designerDescription?: string;
  designerServices?: string;
  employmentPeriod?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackground?: CSSProperties["background"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const ExperienceCard: FunctionComponent<ExperienceCardType> = ({
  jobTitle,
  designerDescription,
  designerServices,
  employmentPeriod,
  propWidth,
  propBackground,
  propBoxShadow,
  propBackgroundColor,
  propColor,
}) => {
  const frameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const dateStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor,
    };
  }, [propBackground, propBoxShadow, propBackgroundColor]);

  const todayStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.experience}>
      <div className={styles.frame}>
        <div className={styles.point} />
        <div className={styles.content}>
          <div className={styles.frame1} style={frameStyle}>
            <div className={styles.freelance}>{jobTitle}</div>
            <b className={styles.seniorGraphicDesigner}>
              {designerDescription}
            </b>
          </div>
          <div className={styles.describtion}>{designerServices}</div>
        </div>
      </div>
      <div className={styles.date} style={dateStyle}>
        <div className={styles.today} style={todayStyle}>
          {employmentPeriod}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
