import React from "react";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon: Icon,
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/25",
    secondary:
      "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20",
    yellow: "bg-red-600 hover:bg-red-700 text-white hover:shadow-red-500/25",
    neon: "bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25",
    glass:
      "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === "sm" ? 16 : size === "lg" ? 24 : 20} />}
      {children}
    </button>
  );
};

export default Button;
