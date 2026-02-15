import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "transparent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

    const variantClasses = {
      primary: "bg-primary text-text hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-secondary text-text hover:bg-gray-700 focus:ring-gray-500",
      transparent:
        " bg-transparent text-primary hover:bg-primary/10 border border-primary",
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      />
    );
  },
);
