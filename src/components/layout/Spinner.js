import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <div class="spinner-border" role="status">
        <span style={{ width: "20%", height: "8%" }} class="sr-only">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Spinner;
