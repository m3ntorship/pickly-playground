import React from "react";
import PropTypes from "prop-types";

const Text = ({ className }) => {
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
        d="M4.6665 7.33333H9.33317V8.66666H4.6665V7.33333ZM4.6665 4.66666H11.9798V6H4.6665V4.66666ZM4.6665 10H13.3332V11.3333H4.6665V10ZM2.6665 2.66666H3.99984V13.3333H2.6665V2.66666Z"
        fill="#5B6366"
      />
    </svg>
  );
};
export default Text;

Text.propTypes = {
  className: PropTypes.string,
};
