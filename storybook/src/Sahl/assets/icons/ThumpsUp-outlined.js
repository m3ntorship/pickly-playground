import React from "react";
import PropTypes from "prop-types";

export default function ThumpsUpOutlined(props) {
  const { width, height, color, className } = props;
  return (
    <svg
      className={`${width || "w-6"} ${height || "h-6"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8H14.388L15.511 4.633C15.713 4.025 15.611 3.351 15.236 2.831C14.861 2.311 14.253 2 13.612 2H12C11.703 2 11.422 2.132 11.231 2.36L6.531 8H4C2.897 8 2 8.897 2 10V19C2 20.103 2.897 21 4 21H7H17.307C18.136 21 18.888 20.479 19.18 19.702L21.937 12.351C21.979 12.239 22 12.12 22 12V10C22 8.897 21.103 8 20 8ZM4 10H6V19H4V10ZM20 11.819L17.307 19H8V9.362L12.468 4H13.614L12.052 8.683C11.949 8.988 12.001 9.323 12.189 9.584C12.377 9.846 12.679 10 13 10H20V11.819Z"
        fill={color || `#fff`}
      />
    </svg>
  );
}

ThumpsUpOutlined.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};
