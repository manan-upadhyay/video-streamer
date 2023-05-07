/* eslint-disable react-hooks/exhaustive-deps */
import Slider from '../components/Slider';
import FolderSection from '../components/sections/FolderSection';
import CardSection from '../components/sections/CardSection';
import { fetchSections } from '../services';
import { useEffect, useState } from 'react';

const Home = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSectionData = async () => {
      const response = await fetchSections();
      setSections(response?.sections);
    };
    if (sections?.length <= 0) {
      fetchSectionData();
    }
  }, []);

  return (
    <div>
      <Slider />
      <CardSection />
      {sections?.length <= 0 ? (
        <h1>No Data to Show</h1>
      ) : (
        <>
          {sections?.map((section, index) => (
            <FolderSection key={index} section={section} />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
