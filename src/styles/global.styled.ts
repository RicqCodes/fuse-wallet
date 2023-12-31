import { createGlobalStyle } from "styled-components";
import { device } from "./utils.styled";

export const Global = createGlobalStyle`
*, :after, :before {
    box-sizing: border-box;
    border: 0 solid;
    position: relative;
    padding: 0;
    margin: 0;    
}

html {
    font-size: 62.5%;
    ${() => device.down("md")} {
      font-size: 61%;
    }

    ${() => device.down("md")} {
      font-size: 58%;
    }
    scroll-behavior: smooth;
    font-family: var(--font-mona);
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

:root {
  --max-width: 1440px;
  --font-mona: 'Work Sans', sans-serif;
  --border-radius: 8px;
  --accent-color: #000;
  --primary-color: 242,242,242;
  --secondary-color: #fff;
  --over-lay: rgba(0,0,0,0.5);
  --tertiary-color: #bfbfbf;
  --increase-color: #1fe000;
  --warning: #9a6700;
  --box-shadow:  0 2px 4px rgba(0, 0, 0, 0.12),
              0 2px 3px rgba(0, 0, 0, 0.24);
}

/* @media (prefers-color-scheme: dark) {
  :root {
    --accent-color: #fff;
  --primary-color: 54,53,55;
  --secondary-color: #000;
}
  } */

body {
  margin: 0;
  min-height: 100vh;
  color: rgb(var(--accent-color));
  background: rgb(var(--primary-color));
  /* transition: all 0.50s linear; */
}

body.light-theme {
  --accent-color: #000;
  --primary-color: 242,242,242;
  --secondary-color: #fff;
  --box-shadow:  0 2px 4px rgba(255, 255, 255, 0.12),
              0 2px 3px rgba(255, 255, 255, 0.24);
}

body.dark-theme {
  --accent-color: #fff;
  --primary-color: 48, 48, 48;
  --secondary-color: #252525;
  --box-shadow:  0 2px 4px rgba(0, 0, 0, 0.12),
              0 2px 3px rgba(0, 0, 0, 0.24);
}

ul, ol {
        list-style-type: none;
    }



p {
    font-size: 1.8rem;
}

a {
  color: var(--accent-color);
  text-decoration: none;
}

span {
        font-size: 1.4rem;
}

small {
        font-size: 1.2rem;
}
`;
