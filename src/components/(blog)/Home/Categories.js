// Categories.js
import React from 'react';

const Categories = ({ onSelectCategory, currentCategory }) => {
  const categories = ["all", "CSS", "category2", "category3"]; // Add your category names

  return (
    <div className="flex">
      {categories.map(category => (
        <button
          key={category}
          className={`mx-2 px-4 py-2 rounded-full ${currentCategory === category ? 'bg-boo-700 text-light' : 'bg-light text-dark'}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
