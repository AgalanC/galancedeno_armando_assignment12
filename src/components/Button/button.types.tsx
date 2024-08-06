import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean;
}
