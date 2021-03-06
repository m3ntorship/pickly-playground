import React from "react";
const UploadButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      id="upload-container"
      className="border-2 border-dashed border-accent bg-grey-shd7 rounded-md text-accent focus:outline-none relative h-14 text-center"
    >
      <span className="text-accent object-none absolute top-3.5 left-1/4 px-7 font-medium font-sm">
        <svg
          className="mr-1 w-4 h-4 fill-current inline"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5H17V12H19V5C19 3.897 18.103 3 17 3H4C2.897 3 2 3.897 2 5V17C2 18.103 2.897 19 4 19H12V17H4V5Z"
            fill="currentColor"
          />
          <path d="M8 11L5 15H16L12 9L9 13L8 11Z" fill="currentColor" />
          <path
            d="M19 14H17V17H14V19H17V22H19V19H22V17H19V14Z"
            fill="currentColor"
          />
        </svg>
        Upload one or multiple images
      </span>
      <input
        type="file"
        id="myFile"
        name="filename"
        multiple
        data-testid="upload-btn"
        className="opacity-0 min-w-full h-full cursor-pointer"
      />
    </div>
  );
};

export default UploadButton;
