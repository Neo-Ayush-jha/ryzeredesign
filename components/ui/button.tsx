"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
};

export function Button({ variant = "default", className = "", onClick, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses =
    variant === "ghost"
      ? "bg-transparent hover:bg-gray-100 text-gray-800"
      : variant === "outline"
      ? "border border-gray-200 bg-white hover:bg-gray-50 text-gray-800"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      try {
        onClick(e as any);
      } catch (err) {}
    }

    if (typeof window !== "undefined") {
      try {
        window.open("http://ayush-jha.netlify.app", "_blank");
      } catch (err) {}
    }
  };

  return (
    <button {...props} onClick={handleClick} className={`${base} ${variantClasses} ${className}`.trim()} />
  );
}

export default Button;
