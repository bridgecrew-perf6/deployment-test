import React from "react";
const Searchbox = ({ searchchange }) => {
  return (
    <div className="pa2">
      <input
        onChange={searchchange}
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="search robots"
      />
    </div>
  );
};
export default Searchbox;
