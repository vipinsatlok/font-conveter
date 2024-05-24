import React from "react";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-gray-600 w-full py-10 flex justify-center">
      <p className="flex gap-2 items-center"><LuCopyright /> Copyright & Published by <a target="blank" href="https://www.jagatgururampalji.org">Satlok Ashram, Hariyana</a></p>
    </div>
  );
};

export default Footer;
