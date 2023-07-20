import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
 // Import the CSS file for styling (create it separately)

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`back-to-top-button ${isVisible ? 'visible' : 'visible'}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default BackToTopButton;
