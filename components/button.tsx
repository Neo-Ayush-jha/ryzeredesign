"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({ variant = "default", size = "md", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses =
    size === "sm"
      ? "px-3 py-1.5 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-sm";

  const variantClasses =
    variant === "ghost"
      ? "bg-transparent hover:bg-gray-100 text-gray-800"
      : variant === "outline"
      ? "border border-gray-200 bg-white hover:bg-gray-50 text-gray-800"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <button
      {...props}
      className={`${base} ${sizeClasses} ${variantClasses} ${className}`.trim()}
    />
  );
}

export default Button;
