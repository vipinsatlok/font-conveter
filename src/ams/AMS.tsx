"use client"

import { convertToAMS } from "@/krutidev";
import React, { ChangeEvent, useState } from "react";

const AMSConverter = () => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const converter = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);

    const result = convertToAMS(value);
    setResult(result);
  };

  return (
    <div className="w-full flex gap-10 mt-5">
      <div className="flex-1">
        <div>
          <label
            htmlFor="text"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Apna Text Yaha Likh Do (Accha Paste Kar Do)
          </label>
          <textarea
            onChange={(e) => converter(e)}
            id="text"
            value={text}
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ji Ha Yahi Paste Ya Likhna Hai.. Appppka Text"
          ></textarea>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <label
            htmlFor="text"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Is Box Me Aapke Text Ka Unicode Aa Jayega
          </label>
          <textarea
            value={result}
            id="text"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Kuch Intjar Aur Fir Maje Se Use Karo....."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AMSConverter;
