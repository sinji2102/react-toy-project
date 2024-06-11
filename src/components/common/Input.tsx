import React, { forwardRef, ReactElement } from "react";
import styled, { css } from "styled-components";
import { InputStyle, InputProps } from "../../types/inputStyleProps";

const Input = forwardRef<HTMLTextAreaElement, InputProps>(({ className, ...rest }, ref): ReactElement => {
  return <InputStyled className={className} ref={ref} {...rest} />;
});

const InputStyled = styled.textarea<InputStyle>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.Regular};
  ${({
    customWidth = "70rem",
    customHeight = "auto",
    customMargin = "auto",
    customPadding = "auto",
    inputColor = "white",
    hasBorder = false,
    borderColor = "black",
    borderRadius = "1rem",
    fontColor = "black",
    customFontSize = "1.8rem",
  }) => css`
    width: ${customWidth};
    height: ${customHeight};
    margin: ${customMargin};
    padding: ${customPadding};
    background-color: ${inputColor};
    border: ${hasBorder ? `0.1rem solid ${borderColor}` : "none"};
    border-radius: ${borderRadius};
    color: ${fontColor};
    font-size: ${customFontSize};
  `}
`;

export default Input;
