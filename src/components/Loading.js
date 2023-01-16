import React from "react";

function Loading({ message }) {
  return (
    <div className="text-center mt-4">
      <h3 className="text-danger">{message}</h3>
    </div>
  );
}

export default Loading;
