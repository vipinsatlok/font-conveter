"use client"

import { convertToAMS } from "@/krutidev";
import Image from "next/image";

export default function Home() {
  const cvt = () => {

   const data =  convertToAMS("सत साहेब ")
   console.log(data)
  }


  return (
    <div>
      <h1 className="text-4xl font-bold my-5">Krutidev Converter</h1>
      <label
        htmlFor="message"
        className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
      >
        Enter Your Unicode
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <button
      onClick={cvt}
        type="button"
        className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Convert
      </button>
    </div>
  );
}
