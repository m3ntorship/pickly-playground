import React from "react";
import PropTypes from "prop-types";

export default function A(props) {
  const { width, height, path1Fill, path2Fill, className } = props;
  // Width & Height should be added as classnames.
  // Later: add the ability to add either in pixels or as classes

  return (
    <svg
      className={`${width || "w-6"} ${height || "h-6"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
        fill={path1Fill || `#FFFFFF`}
      />
      <path
        d="M14.085 14.4023H9.91504L8.97852 17H7.625L11.4258 7.04688H12.5742L16.3818 17H15.0352L14.085 14.4023ZM10.3115 13.3223H13.6953L12 8.66699L10.3115 13.3223Z"
        fill={path2Fill || `#5B6366`}
      />
    </svg>
  );
}

A.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
