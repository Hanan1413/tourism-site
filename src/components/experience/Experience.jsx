import styles from "./experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { faBiking } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function Experience() {
  return (
    <div className={styles.experience}>
      <h1 className={styles.iconHeadline}>
        لماذا السياحة في المملكة العربية السعودية
      </h1>
      <div className={styles.icons}>
        <div>
          <div>
            <FontAwesomeIcon icon={faEarthAsia} className={styles.iconLarge} />
          </div>
          <div>
            <h2 className={styles.iconTitle}>ثقافة</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, hic?{" "}
            </p>
          </div>
        </div>

        <div>
          <FontAwesomeIcon icon={faBiking} className={styles.iconLarge} />
          <h2 className={styles.iconTitle}>مغامرة</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, hic?{" "}
          </p>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className={styles.iconLarge}
          />
          <h2 className={styles.iconTitle}>استكشاف</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, hic?{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
