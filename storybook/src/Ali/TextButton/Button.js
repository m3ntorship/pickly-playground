import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { disabled, size, variant, children } = props;

  return (
    <button
      disabled={disabled}
      className={`capitalize rounded-full focus:outline-none disabled:opacity-25 ${
        variant === "Primary"
          ? `bg-primary-shd1  text-white ${
              !disabled && "hover:bg-primary"
            } focus:border-primary focus:border focus:ring-1 focus:ring-primary-shd1`
          : `border text-primary-shd1 border-primary-shd1 ${
              !disabled && "hover:bg-grey-bg"
            } focus:ring-1 focus:ring-primary-shd1`
      } ${
        size === "Large"
          ? "text-md font-bold px-xl py-3.5 "
          : size === "Medium"
          ? "text-base font-medium px-l py-xs "
          : "text-sm font-medium px-m py-1.5 "
      }
      ${disabled && "cursor-not-allowed"}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["Small", "Medium", "Large"]),
  variant: PropTypes.oneOf(["Primary", "Secondary"]),
  disabled: PropTypes.bool,
  children: PropTypes.string,
};
export default Button;
