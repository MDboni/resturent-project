const FavFoodHeading = () => {
  return (
    <div className="text-center my-8">
      <p className="uppercase text-gray-700 text-lg font-semibold relative inline-block pb-2">
        ORDER YOUR FAVOURITE FOOD
        <span className="block w-full h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-full mt-2 relative">
          <span className="absolute left-0 right-0 mx-auto h-[2px] w-1/2 bg-gray-800 rounded-full"></span>
        </span>
      </p>
    </div>
  );
};

export default FavFoodHeading;
