import styles from "./places.module.css";
import { useState } from "react";




function SinglePlace({ place }) {

  // state to toogle between long and short text
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // slice text to 90 word
  const shortDesc = place.description.slice(0, 100);

  return (
    <div className={styles.cardItem}>
      <h2 className={styles.itemTitle}>{place.title}</h2>
      <img
        className={styles.cardImge}
        src={place.picture}
        alt={place.picture}
      />
      <div className={styles.cardBody}>
        <p>
          {showMore ? place.description : shortDesc}
          <span>
            {showMore ? (
              <button className={styles.readMore} onClick={toggleShowMore}>
                أقرا أقل
              </button>
            ) : (
              <button className={styles.readMore} onClick={toggleShowMore}>
                أقرا المزيد
              </button>
            )}
          </span>
        </p>{" "}
      </div>
    </div>
  );
}

export default SinglePlace;
