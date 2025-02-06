import React from "react";

const Footer = () => {
  return (
    <div className="bg-grey-300 p-14 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-blue-500">Techy star</h1>
        <p>@all rights reserved by Techy star</p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Follow us on </h1>
        <div className="flex flex-col gap-2  items-center">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
