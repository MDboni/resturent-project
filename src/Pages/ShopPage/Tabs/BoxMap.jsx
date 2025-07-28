import { useState } from "react";
import ShopBox from "./ShopBox";

const BoxMap = ({ item }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0); // Page number starts from 0

  const totalPages = Math.ceil(item.length / itemsPerPage); // Total page count

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = item.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 mt-3">
        {currentItems.map((item) => (
          <ShopBox
            key={item._id}
            img={item.image}
            title={item.name}
            subtitle={item.recipe}
          />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center gap-2 mt-8">
        {
          [...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded ${page === currentPage ? 'bg-yellow-400 text-white' : 'bg-white text-black'}`}
            >
              {page + 1}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default BoxMap;
