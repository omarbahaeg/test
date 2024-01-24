import { FunctionComponent, useMemo, type CSSProperties } from "react";
import AdobePhotoshopContainer from "./AdobePhotoshopContainer";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  editingSoftwareName?: string;
  editingSoftwarePercentage?: string;
  designSoftwareName?: string;
  editingSoftwarePercentage2?: string;
  softwareBrand?: string;
  presentationSoftwareName?: string;
  editingSoftwarePercentage3?: string;
  editingSoftwareBrand?: string;
  editingSoftwareDimension?: string;
  editingSoftwarePercentage4?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propWidth1?: CSSProperties["width"];
  propRight1?: CSSProperties["right"];
  propWidth2?: CSSProperties["width"];
  propRight2?: CSSProperties["right"];
  propWidth3?: CSSProperties["width"];
  propRight3?: CSSProperties["right"];
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  editingSoftwareName,
  editingSoftwarePercentage,
  designSoftwareName,
  editingSoftwarePercentage2,
  softwareBrand,
  presentationSoftwareName,
  editingSoftwarePercentage3,
  editingSoftwareBrand,
  editingSoftwareDimension,
  editingSoftwarePercentage4,
  propBorderRadius,
  propWidth,
  propRight,
  propWidth1,
  propRight1,
  propWidth2,
  propRight2,
  propWidth3,
  propRight3,
}) => {
  const progressBarStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const fillStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const fill1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      right: propRight1,
    };
  }, [propWidth1, propRight1]);

  const fill2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      right: propRight2,
    };
  }, [propWidth2, propRight2]);

  const fill3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      right: propRight3,
    };
  }, [propWidth3, propRight3]);

  return (
    <div className={styles.frame}>
      <div className={styles.skill}>
        <div className={styles.frame1}>
          <div className={styles.adobePhotoshop}>
            <b>{`Adobe `}</b>
            <span>{editingSoftwareName}</span>
          </div>
          <b className={styles.b}>{editingSoftwarePercentage}</b>
        </div>
        <AdobePhotoshopContainer />
      </div>
      <div className={styles.skill}>
        <div className={styles.frame1}>
          <div className={styles.adobePhotoshop}>
            <b>{`Adobe `}</b>
            <span>{designSoftwareName}</span>
          </div>
          <b className={styles.b}>{editingSoftwarePercentage2}</b>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.body} />
          <div className={styles.fill} style={fill1Style} />
        </div>
      </div>
      <div className={styles.skill}>
        <div className={styles.frame1}>
          <div className={styles.adobePhotoshop}>
            <b>{softwareBrand}</b>
            <span>{presentationSoftwareName}</span>
          </div>
          <b className={styles.b}>{editingSoftwarePercentage3}</b>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.body} />
          <div className={styles.fill1} style={fill2Style} />
        </div>
      </div>
      <div className={styles.skill}>
        <div className={styles.frame1}>
          <div className={styles.adobePhotoshop}>
            <b>{editingSoftwareBrand}</b>
            <span>{editingSoftwareDimension}</span>
          </div>
          <b className={styles.b}>{editingSoftwarePercentage4}</b>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.body} />
          <div className={styles.fill2} style={fill3Style} />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
