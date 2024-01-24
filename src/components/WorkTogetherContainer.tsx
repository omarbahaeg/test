import { FunctionComponent } from "react";
import styles from "./WorkTogetherContainer.module.css";

const WorkTogetherContainer: FunctionComponent = () => {
  return (
    <div className={styles.letsConnect}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.heading}>
              <div className={styles.heading1}>Let's create</div>
              <div className={styles.strongWorkContainer}>
                <b>Work</b>
                <span>Together</span>
              </div>
            </div>
            <div className={styles.frame3}>
              <div className={styles.tellMeAbout}>
                Tell me about your needs and let’s start working together on the
                best solution for users and business.
              </div>
              <div className={styles.imNotA}>
                I’m not a freelancer, I will be part of your team.
              </div>
            </div>
          </div>
          <div className={styles.frame4}>
            <div className={styles.heading}>
              <div className={styles.heading1}>My digital print</div>
              <div className={styles.strongWorkContainer}>
                <b>Let's</b>
                <span>Connect</span>
              </div>
            </div>
            <div className={styles.frame5}>
              <div className={styles.frame6}>
                <div className={styles.frame7}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector14.svg"
                  />
                </div>
                <div className={styles.frame8}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector15.svg"
                  />
                </div>
                <div className={styles.frame8}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector16.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame10}>
          <div className={styles.frame11}>
            <div className={styles.assest} />
            <div className={styles.frame12}>
              <div className={styles.title}>
                <b>Personal</b>
                <span>Info</span>
              </div>
              <div className={styles.frame13}>
                <b className={styles.label}>
                  <p className={styles.name}>Name:</p>
                  <p className={styles.name}>Date of birth:</p>
                  <p className={styles.name}>Nationality:</p>
                </b>
                <div className={styles.label1}>
                  <p className={styles.name}>Omar Bahaa</p>
                  <p className={styles.name}>14 Aprl 1997</p>
                  <p className={styles.name}>Egypt</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socialInfo}>
            <div className={styles.frame14}>
              <div className={styles.title}>
                <b>Contact</b>
                <span>Me</span>
              </div>
              <div className={styles.frame13}>
                <b className={styles.label}>
                  <p className={styles.name}>Phone:</p>
                  <p className={styles.name}>Email:</p>
                  <p className={styles.name}>Website:</p>
                  <p className={styles.name}>Location:</p>
                </b>
                <div className={styles.label3}>
                  <p className={styles.name}>+20 (10) 10 18 9839</p>
                  <p className={styles.name}>info@omarbahaeg.online</p>
                  <p className={styles.name}>www.omarbahaeg.online</p>
                  <p className={styles.name}>Egypt, Cairo</p>
                </div>
              </div>
            </div>
            <div className={styles.assest1} />
          </div>
          <img className={styles.lineIcon} alt="" src="/line1.svg" />
        </div>
      </div>
    </div>
  );
};

export default WorkTogetherContainer;
