import Head from "next/head";
import { styled } from "next-yak";
import {
  Wrapper,
  FitWelcome,
  FitAutoTextWidth,
  FitFontkit,
} from "../components/FitHeadline";

const Page = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  color: #ededed;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

const Info = styled.p`
  padding: 16px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #888;
  max-width: 600px;
`;


export default function Home() {
  return (
    <>
      <Head>
        <title>css-glyph-fit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/css-glyph-fit-example/favicon.svg" type="image/svg+xml" />
      </Head>
      <Page>
        <Wrapper>
          <FitWelcome>Welcome to Yak</FitWelcome>
        </Wrapper>
        <Wrapper>
          <FitAutoTextWidth>Auto Text Width</FitAutoTextWidth>
        </Wrapper>
        <Wrapper>
          <FitFontkit>Fontkit meets CSS</FitFontkit>
        </Wrapper>
        <Info>
          Each headline uses a <code>clamp()</code> font-size computed from the
          actual glyph widths of Inter, measured at build time with fontkit via a{" "}
          <code>.yak.ts</code> token file. Zero runtime JS, zero CSS variables
          &mdash; just hardcoded ratios baked into the stylesheet.
          {" "}
          <a href="https://github.com/jantimon/css-glyph-fit-example">View source on GitHub</a>
        </Info>
      </Page>
    </>
  );
}
