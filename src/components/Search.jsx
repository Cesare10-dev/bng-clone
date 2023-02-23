import { BiSearch, BiMicrophone, BiImage } from "react-icons/bi";

function Search() {
  return (
    <div className="grid place-items-center mt-[100px]">
      <form className="w-[500px] h-10 rounded-full bg-white flex items-center justify-between p-4">
        <BiSearch className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search the web"
          className="flex-1 ml-2 text-sm"
        />
        <BiMicrophone className="h-5 w-5 text-blue-600" />
        <BiImage className="h-5 w-5 text-blue-600" />
      </form>
    </div>
  );
}

export default Search;
