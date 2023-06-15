/* eslint-disable react-hooks/exhaustive-deps */
import Slider from '../components/slider/Slider';
import FolderSection from '../components/sections/FolderSection';
import CardSection from '../components/sections/CardSection';
import { fetchSections } from '../services';
import { useEffect, useState } from 'react';
import Header from '../common/Header';
import Loader from '../components/loader';

const Home = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSectionData = async () => {
      const response = await fetchSections();
      setSections(response?.sections);
      setLoading(false);
    };
    if (sections?.length <= 0) {
      fetchSectionData();
    }
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <CardSection />
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Loader />
        </div>
      ) : sections?.length <= 0 ? (
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
