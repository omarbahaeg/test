import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.logo}>
            <div className={styles.frame2}>
              <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
            </div>
          </div>
          <div className={styles.frame3}>
            <div className={styles.heading}>
              <div className={styles.strongOmarContainer}>
                <b>OMAR </b>
                <span>BAHAA</span>
              </div>
              <div className={styles.seniorGraphicDesigner}>
                Senior Graphic Designer, Branding
              </div>
            </div>
            <div className={styles.omarBahaaAll}>
              © 2020. Omar Bahaa. All rights reserved.
            </div>
          </div>
        </div>
        <div className={styles.frame4}>
          <div className={styles.link}>
            <img className={styles.vectorIcon1} alt="" src="/vector18.svg" />
          </div>
          <div className={styles.link}>
            <img className={styles.vectorIcon2} alt="" src="/vector19.svg" />
          </div>
          <div className={styles.link}>
            <img className={styles.vectorIcon3} alt="" src="/vector20.svg" />
          </div>
          <div className={styles.link}>
            <img className={styles.vectorIcon4} alt="" src="/vector21.svg" />
          </div>
          <div className={styles.link}>
            <img className={styles.vectorIcon5} alt="" src="/vector22.svg" />
          </div>
          <div className={styles.link}>
            <img className={styles.vectorIcon4} alt="" src="/vector23.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
