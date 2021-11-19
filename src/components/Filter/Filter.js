import React from "react";

const Filter = ({ setTexFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search ..."
        onChange={(e) => setTexFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
