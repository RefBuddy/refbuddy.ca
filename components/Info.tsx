import React from "react";

interface InfoProps {
  className?: string;
}

const Info: React.FC<InfoProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-full w-full ${className}`}
    >
      <div className="flex w-4/5 justify-between mt-12 mb-6 z-50 relative gap-2">
        <div className="bg-white p-6 flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-black">Card Title</h2>
          <p className="text-black">
            Some description for this card. You can customize this content.
          </p>
        </div>
        <div className="bg-white p-6 flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-black">Card Title</h2>
          <p className="text-black">
            Some description for this card. You can customize this content.
          </p>
        </div>
        <div className="bg-white p-6 flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-black">Card Title</h2>
          <p className="text-black">
            Some description for this card. You can customize this content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
