import React from "react";

const Info: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex w-4/5 justify-between mt-12 mb-6 z-50 relative">
        <div className="bg-white p-6 rounded-xl shadow-md flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4">Card Title</h2>
          <p>Some description for this card. You can customize this content.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4">Card Title</h2>
          <p>Some description for this card. You can customize this content.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4">Card Title</h2>
          <p>Some description for this card. You can customize this content.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
