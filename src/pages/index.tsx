import { Hero, BrowseMenu, AboutUs, BurgerAd, Social } from '@/components/home';

const Home = () => {
  return (
    <>
      <Hero />
      <BrowseMenu />
      <AboutUs />
      {/* //! TODO: Design fix needed */}
      {/* <BurgerAd /> */}
      <Social />
    </>
  );
};

export default Home;
