import React from 'react';

const RecoCardBox = ({ item }) => {
  const { image, category } = item;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      <figure className="w-full md:h-56 overflow-hidden">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
        <p className="text-gray-600 text-sm">
          A fresh and delicious {category} dish made with love and care.
        </p>
        <div className="pt-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoCardBox;
