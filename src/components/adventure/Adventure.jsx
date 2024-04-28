import styles from "./Adventure.module.css";

import image from "../../../public/assests/adventures.jpg";

function Adventure() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>استمتع بالمغامرات المثيرة</h1>
        <p>
          المغامرة في السعودية تتمثل في تجارب متنوعة ومثيرة تشمل استكشاف الصحاري
          الشاسعة، وتسلق الجبال الرائعة، وركوب الدراجات الهوائية في المناطق
          الطبيعية الخلابة. كما تتيح المملكة فرصًا مثيرة لممارسة الرياضات
          المائية في البحار والشواطئ الممتدة على طول الساحل الغربي، مثل الغوص
          وركوب الأمواج.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="Image" className={styles.image} />
      </div>
    </div>
  );
}

export default Adventure;
