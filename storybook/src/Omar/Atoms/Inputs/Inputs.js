import { React, useState } from "react";
import PropTypes from "prop-types";
import Success from "./../../assets/Success";
import Error from "./../../assets/Error";
import Close from "./../../assets/Close";
export const OPTION = {
  STATUS: {
    DEFAULT: "Default",
    SUCCESS: "Success",
    ERROR: "Error",
    DISABLED: "Disabled",
  },
};

export const Inputs = ({ type, label, placeHolder }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const style =
    type === OPTION.STATUS.DEFAULT && !value
      ? "border border-grey-shd5 hover:border-grey-shd2"
      : type === OPTION.STATUS.SUCCESS && !value
      ? "border border-success"
      : type === OPTION.STATUS.ERROR && !value
      ? "border border-error"
      : type === OPTION.STATUS.DISABLED && !value
      ? "border border-grey-shd7"
      : "border border-dark-default";
  return (
    <>
      <label htmlFor="input" className="block my-2 text-xs  text-dark-grey">
        {label}
      </label>
      <div className="relative">
        <svg
          className="absolute left-3.5 top-3"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9998 8.66663H2.66647V9.99996V13.3333C2.66647 14.0686 3.26447 14.6666 3.9998 14.6666H5.9998H9.9998H11.9998C12.7351 14.6666 13.3331 14.0686 13.3331 13.3333V9.99996V8.66663H13.9998C14.2691 8.66663 14.5131 8.50396 14.6158 8.2553C14.7191 8.00596 14.6618 7.7193 14.4711 7.52863L8.47113 1.52863C8.21047 1.26796 7.78913 1.26796 7.52847 1.52863L1.52847 7.52863C1.3378 7.7193 1.28047 8.00596 1.3838 8.2553C1.48647 8.50396 1.73047 8.66663 1.9998 8.66663ZM6.66647 13.3333V9.99996H9.33313V13.3333H6.66647ZM7.9998 2.94263L11.9998 6.94263V9.99996L12.0005 13.3333H10.6665V9.99996C10.6665 9.26463 10.0685 8.66663 9.33313 8.66663H6.66647C5.93113 8.66663 5.33313 9.26463 5.33313 9.99996V13.3333H3.9998V9.99996V7.99996V6.94263L7.9998 2.94263Z"
            fill="#8D9A9E"
          />
        </svg>
        <input
          htmlFor="input"
          className={`w-72 h-10 ${style} outline-none rounded-md text-sm py-2.5 px-10 mb-10 placeholder-grey-shd1`}
          type="text"
          placeholder={placeHolder}
          data-testid="textChange"
          onChange={handleChange}
          disabled={type === OPTION.STATUS.DISABLED ? true : false}
        />
        {type === OPTION.STATUS.SUCCESS && !value ? (
          <Success className="absolute left-64 top-3" />
        ) : type === OPTION.STATUS.ERROR && !value ? (
          <Error className="absolute left-64 top-3" />
        ) : (
          ""
        )}
        {value && <Close className="absolute left-64 top-3" />}
      </div>
    </>
  );
};

Inputs.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["Default", "Success", "Error", "Disabled"]),
  placeHolder: PropTypes.string,
};