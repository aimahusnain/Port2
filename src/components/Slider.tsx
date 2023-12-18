
import React, { useState } from "react";

interface Feature {
  id: number;
  text: string;
  description: string;
}

const FeatureCarousel = ({ features }: { features: Feature[]}) => {
  

  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0]);

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="flex flex-col w-full justify-between m-4">
      
      <div className="flex gap-6 w-full flex-wrap">
        
        {features.map((feature) => (
          <button
          aria-label={feature.text}
          key={feature.id}
          className={`cursor-pointer focus:outline-none transition-all duration-75 ${
            selectedFeature.id === feature.id ? "text-white dark:text-dark py-1 border-b-2": "text-white dark:text-dark"
          }`}
          onClick={() => handleFeatureClick(feature)}>
            {feature.text}
          </button>
        ))}

      </div>


      <div className="flex-1 mt-4">
        <div className="w-full border-[0.5px] transition-all duration-75  border-white/20 rounded-sm p-3 h-fit overflow-hidden">

          <p className="w-full text-white/50 dark:text-dark/70">
            {selectedFeature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
