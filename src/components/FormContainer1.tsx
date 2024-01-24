import { FunctionComponent } from "react";
import styles from "./FormContainer1.module.css";

const FormContainer1: FunctionComponent = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.heading}>
              <div className={styles.helloMyNames}>Hello, My Name's</div>
              <div className={styles.omarBahaa}>
                <b>OMAR </b>
                <span>BAHAA</span>
              </div>
              <div className={styles.imGraphicDesigner}>
                I'm Graphic Designer.
              </div>
            </div>
            <div className={styles.designSpecialistWith}>
              Design specialist with over 5 years of experience in corporate
              environments. Proven track record of delivering high-quality work
              that exceeds client expectations.
            </div>
          </div>
          <div className={styles.frame3}>
            <div className={styles.link}>
              <a
                className={styles.workTogether}
                href="https://contra.com/omarbahaeg"
                target="_blank"
              >
                Work Together
              </a>
            </div>
            <div className={styles.link1}>
              <a
                className={styles.workTogether}
                href="https://www.behance.net/Omar-Bahaa"
                target="_blank"
              >
                My Work
              </a>
            </div>
          </div>
        </div>
        <div className={styles.frame4}>
          <div className={styles.frame5}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
            <div className={styles.logo}>
              <div className={styles.frame6}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.frame7}>
            <div className={styles.link2}>
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
