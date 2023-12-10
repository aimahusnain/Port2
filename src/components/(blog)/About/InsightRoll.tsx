import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="sm:w-fit w-screen sm:overflow-visible overflow-hidden">

    <div className=" bg-black w-[500px] dark:bg-accentDark text-white dark:text-dark whitespace-nowrap overflow-hidden">
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
