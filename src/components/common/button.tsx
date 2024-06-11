import { ReactElement } from "react";
import styled, { css } from "styled-components";

import { ButtonStyle, ButtonProps } from "../../types/buttonStyleProps";

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonStyle>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.Regular};
  ${({
    width = "auto",
    height = "auto",
    margin = "auto",
    padding = "auto",
    buttonColor = "white",
    hasBorder = false,
    borderColor = "black",
    borderRadius = "0.7rem",
    fontColor = "white",
    fontSize = "1.8rem",
  }) => css`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    background-color: ${buttonColor};
    border: ${hasBorder ? `0.1rem solid ${borderColor}` : "none"};
    border-radius: ${borderRadius};
    color: ${fontColor};
    font-size: ${fontSize};
  `}
`;

export default Button;
