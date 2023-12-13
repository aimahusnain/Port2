import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full w-screen sm:overflow-visible overflow-hidden">

    <div className="bg-black dark:bg-light text-white dark:text-dark w-full whitespace-nowrap overflow-hidden">
      <div className="animate-roll py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, index) => (
          <div key={index} className="animate-item">
            {text} <span className="px-4">|</span>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default InsightRoll;
