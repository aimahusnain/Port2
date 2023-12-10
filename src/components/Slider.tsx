// FeatureCarousel.tsx
import React, { useState } from "react";

interface Feature {
  id: number;
  text: string;
  imageUrl: string;
}

const FeatureCarousel = ({ features }: { features: Feature[] }) => {
  //   const features: Feature[] = [
  //     {
  //       id: 1,
  //       text: "Generate outlines, code blocks, and summaries.",
  //       imageUrl: "static/img/portfolio-1.jpg",
  //     },
  //     {
  //       id: 2,
  //       text: "Create SEO-optimized titles for better search visibility.",
  //       imageUrl: "static/img/portfolio-2.jpg",
  //     },
  //     {
  //       id: 3,
  //       text: "Interact with a contextually-aware chatbot.",
  //       imageUrl: "static/img/portfolio-3.jpg",
  //     },
  //     {
  //       id: 4,
  //       text: "Improve text clarity, style, and tone.",
  //       imageUrl: "static/img/portfolio-4.jpg",
  //     },
  //   ];

  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0]);

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="flex justify-between m-4 bg-slate-800">
      <div className="flex flex-col space-y-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`p-4 border rounded cursor-pointer ${
              selectedFeature.id === feature.id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleFeatureClick(feature)}
          >
            {feature.text}
          </div>
        ))}
      </div>
      <div className="flex-1 ml-4">
        <div className="w-[100px] overflow-hidden">
          <img
            src={selectedFeature.imageUrl}
            alt={`Feature ${selectedFeature.id}`}
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
