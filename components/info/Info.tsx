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
      <div className="flex flex-wrap justify-center w-full md:w-4/5 mt-12 mb-6 z-50 gap-2">
        <Card
          title="For Assignors"
          description="Some description for assignors. You can customize this content."
        />
        <Card
          title="For Officials"
          description="Some description for officials. You can customize this content."
        />
        <Card
          title="Pricing"
          description="Some description regarding pricing. You can customize this content."
        />
        <Card
          title="Contact Us"
          description="Get in touch with us for more information or queries."
        />
      </div>
    </div>
  );
};

export default Info;
