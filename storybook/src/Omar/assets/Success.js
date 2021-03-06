import React from "react";
import PropTypes from "prop-types";

const Success = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66681 10.3906L4.47148 8.19527L3.52881 9.13794L6.66681 12.2759L13.1381 5.8046L12.1955 4.86194L6.66681 10.3906Z"
        fill="#07B255"
      />
    </svg>
  );
};
export default Success;
Success.propTypes = {
  className: PropTypes.string,
};
