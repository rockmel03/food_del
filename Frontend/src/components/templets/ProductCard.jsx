const ProductCard = ({ data }) => {
  return (
    <article className="bg-zinc-800 w-full max-w-[350px] aspect-[3/4] rounded-lg overflow-hidden">
      <div className="w-full h-[60%]">
        <img src={data.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="px-2 py-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium capitalize">{data.name}</h2>
          <h3 className="px-2 py-1 bg-green-500 text-white rounded text-sm font-medium">
            <span>⭐</span>
            <span>3.4</span>
          </h3>
        </div>
        <p className="text-base opacity-80 leading-[1.2] my-3">
          {data.description}
        </p>
        <h2 className="text-2xl font-medium text-orange-500">
          $ <span>{data.price}</span>
        </h2>
      </div>
    </article>
  );
};

export default ProductCard;
