import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../Animation - 1701850937689.json'; // Replace with your file path

const Preloader = () => {
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById('loading'), // DOM element where you want the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, // Your animation data
    });

    return () => anim.destroy(); // Clean up animation on unmount
  }, []);

  return (
    <div id="loading">
      {/* Additional content or styling can be added here */}
    </div>
  );
};

export default Preloader;
