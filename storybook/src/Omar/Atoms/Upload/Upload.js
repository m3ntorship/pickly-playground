import React from "react";

export const Upload = ({ text }) => {
  return (
    <div>
      <label
        htmlFor="input-form"
        className="w-full h-14 block text-center border border-dashed border-accent rounded-md pt-4 pb-5 bg-grey-shd7 cursor-pointer "
      >
        <svg
          className="inline-block"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.16683 3.33333H11.8335V8H13.1668V3.33333C13.1668 2.598 12.5688 2 11.8335 2H3.16683C2.4315 2 1.8335 2.598 1.8335 3.33333V11.3333C1.8335 12.0687 2.4315 12.6667 3.16683 12.6667H8.50016V11.3333H3.16683V3.33333Z"
            fill="#00A8E8"
          />
          <path
            d="M5.8335 7.33333L3.8335 10H11.1668L8.50016 6L6.50016 8.66667L5.8335 7.33333Z"
            fill="#00A8E8"
          />
          <path
            d="M13.1668 9.33333H11.8335V11.3333H9.8335V12.6667H11.8335V14.6667H13.1668V12.6667H15.1668V11.3333H13.1668V9.33333Z"
            fill="#00A8E8"
          />
        </svg>
        <input
          type="file"
          id="input-file"
          className="opacity-0 absolute z-0"
        ></input>
        <span className="text-accent font-semibold">{text}</span>
      </label>
    </div>
  );
};