import { assets } from "../assets";

const SearchBar = () => {
  return (
    <div className={`flex items-center px-2 py-2 bg-white rounded-full`}>
      <input
        type="text"
        name=""
        id=""
        className="pl-2 outline-none border-none placeholder:capitalize"
        placeholder="Search..."
      />

      <div className="w-[22px] h-[22px] ">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SearchBar;
