import aboutImage from '../../images/about.jpg';
import css from './About.module.css';

function About() {
  return (
    <div className={css.wrapper}>
      <div>
        <img className={css.image} src={aboutImage} alt="" />
      </div>
      <div className={css.textWrapper}>
        <h2 className={css.title}>About</h2>
        <p>
          Welcome to Rent Wheels Hub, your premier destination for hassle-free
          car rentals. Our extensive fleet of vehicles, ranging from sleek
          sedans to spacious SUVs, ensures that you find the perfect ride for
          any occasion. With a commitment to exceptional customer service, we
          strive to make your rental experience seamless and memorable.
        </p>
      </div>
    </div>
  );
}

export default About;
