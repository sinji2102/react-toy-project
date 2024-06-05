import { css } from "styled-components";

const colors = {
  white: "#F3F9FB",
  liteBlue: "#87C0CD",
  blue: "#226597",
  darkBlue: "113F67",
};

const fonts = {
  ExtraBold: css`
    font-family: "Pretendard";
    line-height: auto;
    font-weight: 800;
  `,
  Bold: css`
    font-family: "Pretendard";
    line-height: auto;
    font-weight: 700;
  `,
  SemiBold: css`
    font-family: "Pretendard";
    line-height: auto;
    font-weight: 600;
  `,
  Medium: css`
    font-family: "Pretendard";
    line-height: auto;
    font-weight: 500;
  `,
  Regular: css`
    font-family: "Pretendard";
    line-height: auto;
    font-weight: 400;
  `,
  Light: css`
    font-family: "Pretendard";
    line-height: auto;
    font-weight: 300;
  `,
  ExtraLight: css`
    font-family: "Pretendard";
    line-height: auto;
    font-weight: 200;
  `,
  Thin: css`
    font-family: "Pretendard";
    line-height: auto;
    font-weight: 100;
  `,
};

const theme = {
  fonts,
  colors,
};

export default theme;
