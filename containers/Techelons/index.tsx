import styles from "./Techelons.module.scss";
import Tilt from "react-parallax-tilt";
import BlockContent from "@sanity/block-content-to-react";

interface Props {
  about: {
    name: string;
    about: Record<any, any>;
  };
}
const Techelons = ({ about }: Props) => {
  return (
    <div className={styles.container}>
      <h1>About Citronics</h1>
      <div className={styles.about_techelons}>
        <div className={styles.logo}>
          <Tilt>
            <img src="./images/logo.png" alt="CDGI"/>
          </Tilt>
        </div>
        <div className={styles.about_techelons_text}>
          CITRONICS , the annual national level techno management fest of CDGI is organized every year with a sole intention of providing an impetus to the talented minds of engineering and management students with an opportunity to showcase their professional brilliance. Citronics provide the right platform for students to showcase their prowess and compete not only at the state level but also with students at national level. Number of high profile events like Robotics, Civil Engineering, Mechatronics, Software, and Management are organized in Citronics .
        </div>
      </div>
    </div>
  );
};

export default Techelons;
