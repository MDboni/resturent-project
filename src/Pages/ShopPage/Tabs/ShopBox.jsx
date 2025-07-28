const ShopBox = ({ img, subtitle, title }) => {
  return (
    <div className="card bg-white shadow-md hover:shadow-xl rounded-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
      <figure className="h-60 overflow-hidden rounded-t-xl relative">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
        <h2 className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-bold rounded shadow">
          $10
        </h2>
      </figure>
      <div className="card-body text-center items-center">
        <h2 className="card-title text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary px-6 py-2 hover:scale-105 transition-all duration-300">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopBox;
