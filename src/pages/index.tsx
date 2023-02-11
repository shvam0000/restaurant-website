import {
  Hero,
  BrowseMenu,
  AboutUs,
  BurgerAd,
  Social,
  Footer,
} from '@/components/home';

const Home = () => {
  return (
    <>
      <Hero />
      <BrowseMenu />
      <AboutUs />
      {/* //! TODO: Design fix needed */}
      {/* <BurgerAd /> */}
      <Social />
      <Footer />
    </>
  );
};

export default Home;
