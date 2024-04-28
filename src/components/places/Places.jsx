import styles from "./places.module.css";
import placesData from "../../places.json";
import SinglePlace from "./SinglePlace";

function Places({isHome=false}) {
  // Slice the first three items from the 'placesData' array
  const singlePlace = isHome ? placesData.slice(0, 3)  : placesData; 
  
  
  return (
    <div>
      <h1 className={styles.headline}>أماكن سياحية مشهورة بالمملكة </h1>

      <div className={styles.card}>
        {singlePlace.map((place) => (
          <SinglePlace place={place} />
        ))}
      </div>
    </div>
  );
}

export default Places;
