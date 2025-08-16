import { ReactNode } from 'react';
import { Alert as MaterialAlert } from '@material-tailwind/react';
import { twMerge } from 'tailwind-merge';

interface AlertProps {
  children: ReactNode;
  color?: 'blue' | 'red' | 'green' | 'amber';
  className?: string;
}

export function Alert({ children, color = 'blue', className }: AlertProps) {
  return (
    <MaterialAlert 
      color={color}
      className={twMerge('mb-4', className)}
      animate={{
        mount: { y: 0 },
        unmount: { y: 100 },
      }}
    >
      {children}
    </MaterialAlert>
  );
}
