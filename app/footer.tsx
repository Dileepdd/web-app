import userData from "@/public/data/data.json";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-2 border-t-2 text-xs font-thin">
      <div>{userData.footer.title}</div>
      <div>{userData.footer.description}</div>
    </div>
  );
};

export default Footer;
