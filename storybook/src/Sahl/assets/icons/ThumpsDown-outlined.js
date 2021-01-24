import React from "react";
import PropTypes from "prop-types";

export default function ThumpsDownOutlined(props) {
  const { width, height, color, className } = props;
  return (
    <svg
      className={`${width || "w-6"} ${height || "h-6"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3H17H6.693C5.864 3 5.112 3.521 4.82 4.298L2.063 11.649C2.021 11.761 2 11.88 2 12V14C2 15.103 2.897 16 4 16H9.612L8.49 19.367C8.287 19.975 8.389 20.649 8.764 21.169C9.14 21.689 9.746 22 10.388 22H12C12.297 22 12.578 21.868 12.769 21.64L17.469 16H20C21.103 16 22 15.103 22 14V5C22 3.897 21.103 3 20 3ZM11.531 20H10.386L11.948 15.316C12.051 15.011 11.999 14.676 11.811 14.415C11.623 14.154 11.321 14 11 14H4V12.181L6.693 5H16V14.638L11.531 20ZM18 14V5H20L20.001 14H18Z"
        fill={color || `#fff`}
      />
    </svg>
  );
}

ThumpsDownOutlined.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};
