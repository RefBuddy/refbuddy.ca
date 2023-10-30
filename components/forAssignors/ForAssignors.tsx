import React from "react";

const ForAssignors: React.FC = () => {
  return (
    <div className="for-assignors-container">
      <h1 className="header slide-in-left-to-right">For Assignors</h1>
      <div className="content-container fade-in-long">
        <img src="/assignors.png" alt="Assignors" className="assignors-image" />
        <p className="description">Description text goes here...</p>
      </div>
    </div>
  );
};

export default ForAssignors;
