import React from "react";

const Divider = ({ color = "orange-500" }: { color?: string }) => {
  return <div className={`w-20 h-1 bg-${color} mx-auto mb-12 rounded`}></div>;
};

export default Divider;
