import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full py-5">
      <ul className="flex justify-between">
        <li>
          <h4 className="text-2xl font-semibold">SA Font Conveter</h4>
        </li>
        <div className="flex gap-5 text-lg font-semibold">
          <li>
            <Link href={"/krutidev"}>Krutidev</Link>
          </li>
          <li>
            <Link href={"/ams"}>AMS</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
