import Hero from 'components/Hero/Hero';
import Advantages from 'components/Advantages/Advantages';
import Gallery from 'components/Gallery/Gallery';
import CarBrands from 'components/CarBrands/CarBrands';

function HomePage() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Gallery />
      <CarBrands />
    </main>
  );
}

export default HomePage;
