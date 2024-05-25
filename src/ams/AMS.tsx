"use client";

import { convertToAMS } from "@/krutidev";
import React, { ChangeEvent, useState } from "react";
import { FaRegPaste } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './DG2.ttf' })

const AMSConverter = () => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const converter = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);

    const result = convertToAMS(value);
    setResult(result);
  };

  const copy = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const paste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setText(text);
        const result = convertToAMS(text);
        setResult(result);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  return (
    <div className="w-full flex gap-10 mt-5">
      <div className="flex-1">
        <div className="">
          <div className="flex justify-between">
            <label
              htmlFor="text"
              className="block mb-2 text-lg font-medium text-gray-200 dark:text-white"
            >
              Apna Text Yaha Likh Do (Accha Paste Kar Do)
            </label>
            <button className="mb-5" onClick={paste}>
              <FaRegPaste size={25} />
            </button>
          </div>

          <textarea
            onChange={(e) => converter(e)}
            id="text"
            value={text}
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ji Ha Yahi Paste Ya Likhna Hai.. Appppka Text"
          ></textarea>
        </div>

        <div className="py-10"></div>
      </div>

      <div className="flex-1">
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="text"
              className="block mb-2 text-lg font-medium text-gray-200 dark:text-white"
            >
              Is Box Me Aapke Text Ka AMS Aa Jayega
            </label>
            <button className="mb-5" onClick={copy}>
              <FaRegCopy size={25} />
            </button>
          </div>
          <textarea
            value={result}
            id="text"
            rows={8}
            className={`block ${myFont.className} box p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="....."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AMSConverter;
