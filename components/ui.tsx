import {
  Card as MTCard,
  Typography as MTTypography,
  Input as MTInput,
  Button as MTButton,
  Textarea as MTTextarea,
  Alert as MTAlert,
} from "@material-tailwind/react";
import { twMerge } from 'tailwind-merge';
import { ComponentProps } from 'react';

export const Card = MTCard;
export const Typography = MTTypography;
export const Input = MTInput;
export const Button = MTButton;
export const Textarea = MTTextarea;

"use client";

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
import type { ComponentProps } from 'react';

export const Card = MaterialCard;
export const Typography = MaterialTypography;
export const Input = MaterialInput;
export const Button = MaterialButton;
export const Textarea = MaterialTextarea;

export function Alert({ className, ...props }: ComponentProps<typeof MaterialAlert>) {
  return (
    <MaterialAlert
      {...props}
      className={twMerge('mb-4', className)}
      animate={{
        mount: { y: 0 },
        unmount: { y: 100 },
      }}
    />
  );
}
