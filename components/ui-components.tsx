"use client";

import { twMerge } from 'tailwind-merge';

// Simple Card component
export function Card({ children, className, ...props }: any) {
  return (
    <div 
      className={twMerge(
        'bg-white rounded-xl shadow-sm border border-neutral-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Simple Typography component
export function Typography({ children, variant = "p", className, ...props }: any) {
  const baseClasses = "text-neutral-800";
  const variantClasses = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold", 
    h3: "text-2xl font-bold",
    h4: "text-xl font-semibold",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",
    p: "text-base",
    paragraph: "text-base leading-relaxed",
    small: "text-sm",
  };

  const Component = variant.startsWith('h') ? variant : 'p';
  
  return (
    <Component 
      className={twMerge(baseClasses, variantClasses[variant as keyof typeof variantClasses], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

// Simple Input component
export function Input({ label, className, ...props }: any) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <input
        className={twMerge(
          "w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
          className
        )}
        {...props}
      />
    </div>
  );
}

// Simple Button component
export function Button({ children, variant = "primary", size = "md", className, ...props }: any) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-500",
    outlined: "border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-500",
    text: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={twMerge(
        baseClasses,
        variantClasses[variant as keyof typeof variantClasses],
        sizeClasses[size as keyof typeof sizeClasses],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Simple Textarea component
export function Textarea({ label, rows = 4, className, ...props }: any) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={twMerge(
          "w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical",
          className
        )}
        {...props}
      />
    </div>
  );
}

// Simple Alert component
export function Alert({ children, color = "blue", className, ...props }: any) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-800 border-blue-200",
    red: "bg-red-50 text-red-800 border-red-200",
    green: "bg-green-50 text-green-800 border-green-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
  };

  return (
    <div
      className={twMerge(
        "p-4 rounded-lg border",
        colorClasses[color as keyof typeof colorClasses],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
