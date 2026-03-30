import { styled, css } from "next-yak";
import { textWidths } from "./typography/typography.yak";

export const Wrapper = styled.div`
  font-family: "Inter", sans-serif;
  text-align: center;
`;

const skeletonText = css`
  font-weight: 400;
  text-box: trim-both cap text;

  background: linear-gradient(135deg, #0cebeb, #20e3b2, #29ffc6) -100%/ 200%;
  -webkit-text-fill-color: transparent;

  @supports (-webkit-text-stroke: red 1px) {
    transform: translateY(-4px);
    padding: 4px 0;
    background: linear-gradient(135deg, #0cebeb, #20e3b2, #29ffc6) -100%/ 200%;
    -webkit-text-fill-color: initial;
    -webkit-text-stroke: 2px transparent;
    -webkit-background-clip: text;
    background-clip: text;
    color: var(--background);
    letter-spacing: 0.02em;
  }

  background-clip: text;
  -webkit-background-clip: text;
`;

export const FitWelcome = styled.h1`
  font-size: clamp(24px, (100vw - 32px) / ${textWidths["Welcome to Yak"]}, 120px);
  line-height: 1.1;
  margin: 0.25em 0;
  white-space: nowrap;
  ${skeletonText}
`;

export const FitAutoTextWidth = styled.h1`
  font-size: clamp(32px, (100vw - 32px) / ${textWidths["Auto Text Width"]}, 120px);
  line-height: 1.1;
  margin: 0.25em 0;
  white-space: nowrap;
  ${skeletonText}
`;

export const FitFontkit = styled.h1`
  font-size: clamp(20px, (100vw - 32px) / ${textWidths["Fontkit meets CSS"]}, 100px);
  line-height: 1.1;
  margin: 0.25em 0;
  white-space: nowrap;
  ${skeletonText}
`;
