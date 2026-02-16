import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "transparent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center px-4 py-2 rounded-lg cursor-pointer";

    const variantClasses = {
      primary: "bg-primary hover:bg-primary/80 hover:scale-105 duration-300",
      secondary: "bg-secondary",
      transparent: "transition-all hover:scale-105 hover:shadow-lg",
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
