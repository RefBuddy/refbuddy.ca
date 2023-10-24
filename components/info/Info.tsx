import React from "react";

import { Card } from "./utils";

interface InfoProps {
  className?: string;
}

const Info: React.FC<InfoProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-full w-full ${className}`}
    >
      <div className="flex w-4/5 justify-between mt-12 mb-6 z-50 relative gap-2">
        <Card
          title="Card Title"
          description="Some description for this card. You can customize this content."
        />
        <Card
          title="Card Title"
          description="Some description for this card. You can customize this content."
        />
        <Card
          title="Card Title"
          description="Some description for this card. You can customize this content."
        />
      </div>
    </div>
  );
};

export default Info;
