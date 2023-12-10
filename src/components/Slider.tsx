
import { Button } from "@chakra-ui/react";
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
    <div className="flex flex-col justify-between m-4">
      <div className="flex gap-6 flex-wrap">
        
        {features.map((feature) => (
          <Button
          key={feature.id}
          className={`cursor-pointer focus:outline-none transition-all duration-75 ${
            selectedFeature.id === feature.id ? "text-white py-1 border-b-2": "text-white"
          }`}
          onClick={() => handleFeatureClick(feature)}>
            {feature.text}
          </Button>
        ))}

      </div>


      <div className="flex-1 mt-4">
        <div className="w-full border-[0.5px] transition-all duration-75  border-white/20 rounded-sm p-3 h-fit overflow-hidden">
           {/* <img
            src={selectedFeature.description}
            alt={`Feature ${selectedFeature.id}`}
            className="w-full rounded"
          /> */}

          <p className="text-white/50">
            {selectedFeature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
