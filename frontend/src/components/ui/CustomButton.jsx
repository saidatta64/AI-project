import React from "react";

export function CustomButton({ variant = "default", children, className = "", ...props }) {
  const baseStyles = "px-4 py-2 font-bold border-2 border-black transition-transform";
  const variantStyles = {
    default: "bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-white hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
