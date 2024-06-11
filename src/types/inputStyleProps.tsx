import React from "react";

export interface InputStyle {
  customWidth?: string;
  customHeight?: string;
  customMargin?: string;
  customPadding?: string;
  inputColor?: string;
  hasBorder?: boolean;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  customFontSize?: string;
}

export interface InputProps
  extends Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      "width" | "height" | "margin" | "padding" | "fontSize"
    >,
    InputStyle {
  className?: string;
  placeholder?: string;
}
