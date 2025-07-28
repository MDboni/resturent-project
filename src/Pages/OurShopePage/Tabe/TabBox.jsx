const TabBox = ({ item }) => {
  const { image, recipe, name, price } = item;

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-md mx-auto relative">
      {/* Price Tag */}
      <p className="absolute top-3 right-3 text-xl font-bold text-yellow-600 bg-white px-2 py-1 rounded shadow">
        ${price}
      </p>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body text-left px-4 py-2">
        <h2 className="card-title text-lg md:text-xl">{name}</h2>
        <p className="text-sm md:text-base text-gray-700">{recipe}</p>
        <div className="card-actions justify-end mt-3">
          <button className="btn btn-sm md:btn-md btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default TabBox;
