import Slider from "../components/Slider";

import FolderSection from "../components/sections/FolderSection";
import CardSection from "../components/sections/CardSection";

const Home = () => {
  return (
    <div>
      <Slider />
      <CardSection />
      <FolderSection />
      <FolderSection />
    </div>
  );
};

export default Home;
