import React from "react";

const LeftSideMenu = () => {
  return (
    <div className="bg-orange-200 h-full cursor-pointer">
      <ul>
        <li className="p-3 hover:bg-gray-200">Products</li>
        <li className="p-3 hover:bg-gray-200">Cart</li>
      </ul>
    </div>
  );
};

export default LeftSideMenu;
