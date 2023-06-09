import React, { useState, useEffect } from 'react';
import './ResponsiveComponent.css'
const ResponsiveComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 500) {
      document.body.classList.add('desktop-view-only');
    } else {
      document.body.classList.remove('desktop-view-only');
    }
  }, [windowWidth]);

  return (
    <div>
      {/* Other components */}
    </div>
  );
};

export default ResponsiveComponent;
