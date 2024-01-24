import { FunctionComponent } from "react";
import styles from "./AdobePhotoshopContainer.module.css";

const AdobePhotoshopContainer: FunctionComponent = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.body} />
      <div className={styles.fill} />
    </div>
  );
};

export default AdobePhotoshopContainer;
