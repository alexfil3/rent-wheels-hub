import About from 'components/About/About';
import Catalog from 'components/Catalog/Catalog';
import css from './AboutAndCatalogWrapper.module.css';

function AboutAndCatalogWrapper() {
  return (
    <section>
      <div className={css.wrapper}>
        <About />
        <Catalog />
      </div>
    </section>
  );
}

export default AboutAndCatalogWrapper;
