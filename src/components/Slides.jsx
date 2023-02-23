import React from "react";

function Slides() {
  return (
    <div className="grid place-items-center mt-10">
      <div className="bg-gray-300 w-96 h-40 rounded-lg grid place-items-center py-4">
        <h2 className="text-blue-600 text-xl font-bold">
          Introducing the new Bing.
        </h2>
        <p>Ask real questions. Get complete answers.</p>
        <button className="bg-blue-600 font-bold text-white rounded-full text-sm p-2 px-3">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Slides;
