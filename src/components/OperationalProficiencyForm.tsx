import { FunctionComponent } from "react";
import FormContainer from "./FormContainer";
import styles from "./OperationalProficiencyForm.module.css";

const OperationalProficiencyForm: FunctionComponent = () => {
  return (
    <div className={styles.operationalProficiency}>
      <div className={styles.column}>
        <b className={styles.preTitle}>Professional Skills.</b>
        <div className={styles.title}>
          <b>Operational</b>
          <span>Proficiency</span>
        </div>
      </div>
      <div className={styles.frame}>
        <FormContainer
          editingSoftwareName="Photoshop"
          editingSoftwarePercentage="85%"
          designSoftwareName="Illustrator"
          editingSoftwarePercentage2="80%"
          softwareBrand="Microsoft "
          presentationSoftwareName="PowerPoint"
          editingSoftwarePercentage3="60%"
          editingSoftwareBrand="Figma "
          editingSoftwareDimension="UI"
          editingSoftwarePercentage4="85%"
          propBorderRadius="5px"
          propWidth="84.94%"
          propRight="15.06%"
          propWidth1="80.68%"
          propRight1="19.32%"
          propWidth2="59.96%"
          propRight2="40.04%"
          propWidth3="84.94%"
          propRight3="15.06%"
        />
        <FormContainer
          editingSoftwareName="Lightroom"
          editingSoftwarePercentage="90%"
          designSoftwareName="InDesign"
          editingSoftwarePercentage2="60%"
          softwareBrand="Adobe "
          presentationSoftwareName="XD"
          editingSoftwarePercentage3="85%"
          editingSoftwareBrand="Adobe "
          editingSoftwareDimension="Dimension"
          editingSoftwarePercentage4="90%"
          propBorderRadius="unset"
          propWidth="89.92%"
          propRight="10.08%"
          propWidth1="59.96%"
          propRight1="40.04%"
          propWidth2="84.94%"
          propRight2="15.06%"
          propWidth3="89.92%"
          propRight3="10.08%"
        />
      </div>
    </div>
  );
};

export default OperationalProficiencyForm;
