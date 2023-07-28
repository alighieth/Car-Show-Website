"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

function CustomButton(props: CustomButtonProps) {
  const {
    title,
    isDisabled = false,
    containerStyles,
    handleClick,
    btnType = "button",
    textStyles,
    rightIcon,
  } = props;
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={isDisabled}
      type={btnType}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="button icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
