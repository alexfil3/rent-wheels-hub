import Hero from 'components/Hero/Hero';
import AboutAndCatalogWrapper from 'components/AboutAndCatalogWrapper/AboutAndCatalogWrapper';
import CarBrands from 'components/CarBrands/CarBrands';

function HomePage() {
  return (
    <main>
      <Hero />
      <AboutAndCatalogWrapper />
      <CarBrands />
    </main>
  );
}

export default HomePage;
