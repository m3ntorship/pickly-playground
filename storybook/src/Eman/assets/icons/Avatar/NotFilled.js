import React from "react";
import PropTypes from "prop-types";

const NotFilled = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2.6665C12.324 2.6665 9.33333 5.65717 9.33333 9.33317C9.33333 13.0092 12.324 15.9998 16 15.9998C19.676 15.9998 22.6667 13.0092 22.6667 9.33317C22.6667 5.65717 19.676 2.6665 16 2.6665ZM16 13.3332C13.7947 13.3332 12 11.5385 12 9.33317C12 7.12784 13.7947 5.33317 16 5.33317C18.2053 5.33317 20 7.12784 20 9.33317C20 11.5385 18.2053 13.3332 16 13.3332ZM28 27.9998V26.6665C28 21.5212 23.812 17.3332 18.6667 17.3332H13.3333C8.18667 17.3332 4 21.5212 4 26.6665V27.9998H6.66667V26.6665C6.66667 22.9905 9.65733 19.9998 13.3333 19.9998H18.6667C22.3427 19.9998 25.3333 22.9905 25.3333 26.6665V27.9998H28Z"
        fill="#8D9A9E"
      />
    </svg>
  );
};
export default NotFilled;

NotFilled.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
