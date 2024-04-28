import styles from './styles.module.css';



function Hero() {
  return (

<header id="header" className={styles.header}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1>اكتشف  الأماكن السياحية في المملكة </h1>
        <p className={styles.pLarge}>تتمتع المملكة العربية السعودية بمجموعة واسعة ومتنوعة من المناطق السياحية التي تجذب الزوار من مختلف أنحاء العالم. تضم المملكة مزيجاً رائعاً من التراث والثقافة والطبيعة الخلابة، مما يجعلها وجهة سياحية مثيرة للاهتمام.</p>

        <a className={styles.btnSolid}  href="#intro">اكتشف المزيد</a>
        مغامرة ثقافة 
      </div>
      </header>
  )
}

export default Hero
