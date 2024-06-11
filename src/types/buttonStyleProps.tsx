import React, { ReactNode } from "react";

export interface ButtonStyle {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  buttonColor?: string;
  hasBorder?: boolean;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className?: string;
}
