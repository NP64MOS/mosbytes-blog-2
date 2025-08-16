"use client";

import {
  Card as MaterialCard,
  Typography as MaterialTypography,
  Input as MaterialInput,
  Button as MaterialButton,
  Textarea as MaterialTextarea,
  Alert as MaterialAlert,
} from "@material-tailwind/react";
import { twMerge } from 'tailwind-merge';
import { ComponentProps, forwardRef } from 'react';

// Define base component props
type BaseProps = {
  placeholder?: string;
  onResize?: () => void;
  onResizeCapture?: () => void;
  onPointerEnterCapture?: () => void;
  onPointerLeaveCapture?: () => void;
};

// Create wrapped components with proper types
type CardProps = ComponentProps<typeof MaterialCard> & BaseProps;
export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => (
  <MaterialCard {...props} ref={ref} />
));
Card.displayName = 'Card';

type TypographyProps = ComponentProps<typeof MaterialTypography> & BaseProps;
export const Typography = forwardRef<HTMLDivElement, TypographyProps>((props, ref) => (
  <MaterialTypography {...props} ref={ref} />
));
Typography.displayName = 'Typography';

type InputProps = ComponentProps<typeof MaterialInput> & BaseProps & { crossOrigin?: string };
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { crossOrigin = "", ...rest } = props;
  return <MaterialInput {...rest} crossOrigin={crossOrigin} ref={ref} />;
});
Input.displayName = 'Input';

type ButtonProps = ComponentProps<typeof MaterialButton> & BaseProps;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <MaterialButton {...props} ref={ref} />
));
Button.displayName = 'Button';

type TextareaProps = ComponentProps<typeof MaterialTextarea> & BaseProps;
export const Textarea = forwardRef<HTMLDivElement, TextareaProps>((props, ref) => (
  <MaterialTextarea {...props} ref={ref} />
));
Textarea.displayName = 'Textarea';

type AlertProps = ComponentProps<typeof MaterialAlert> & BaseProps & {
  className?: string;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(({ className, ...props }, ref) => (
  <MaterialAlert
    {...props}
    ref={ref}
    className={twMerge('mb-4', className)}
    animate={{
      mount: { y: 0 },
      unmount: { y: 100 },
    }}
  />
));
Alert.displayName = 'Alert';
