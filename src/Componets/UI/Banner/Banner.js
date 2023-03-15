import styles from "./Banner.module.css";

const Banner = ({ styleObject, text }) => {
  console.log(styleObject);
  return (
    <div className={styles.BannerContainer} style={styleObject}>
      {text}
    </div>
  );
};

export default Banner;
