import Slider from "../components/Slider";

import FolderSection from "../components/sections/FolderSection";
import CardSection from "../components/sections/CardSection";
import { SECTION_DATA } from "../constants/folderData.js";

const Home = () => {
  return (
    <div>
      <Slider />
      <CardSection />
      {SECTION_DATA.map((section, index) => (
        <FolderSection key={index} section={section} />
      ))}
    </div>
  );
};

export default Home;
