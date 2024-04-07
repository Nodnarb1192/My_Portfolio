import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #11111b;
    --text-color: #afd33d;
    --highlight-color: #c0dc67;
    --font-family-monospace: monospace;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: calc(6.4px + 0.8125vw);
    box-sizing: border-box;
    cursor: default;
  }

  ::selection {
    color: var(--background-color);
    background-color: var(--highlight-color);
  }
`;

const scan = keyframes`
  from, 20%, 100% {
    height: 0;
    transform: translate(-50%, 0.44em);
  }
  10%, 15% {
    height: 1em;
    line-height: .2em;
    transform: translate(-55%, 0.01em);
  }
`;

// const pulse = keyframes`
//   from {
//     text-shadow: 0 0 0 #afd33d, 0 0 0 rgba(175, 211, 61, 0.3), 0 0 0 rgba(175, 211, 61, 0.3);
//   }
//   to {
//     text-shadow: 0 0 0.07em #afd33d, -0.2em 0 2em rgba(175, 211, 61, 0.3), 0.2em 0 2em rgba(175, 211, 61, 0.3);
//   }
// `;

const attn = keyframes`
  0%, 100% {
    opacity: 1;
  }
  30%, 35% {
    opacity: .4;
  }
`;

const shake = keyframes`
  0%, 100% {
    transform: translate(-1px, 0);
  }
  10% {
    transform: translate(2px, 1px);
  }
  30% {
    transform: translate(-3px, 2px);
  }
  35% {
    transform: translate(2px, -3px);
    filter: blur(4px);
  }
  45% {
    transform: translate(2px, 2px) skewY(-8deg) scale(0.96, 1);
    filter: blur(0);
  }
  50% {
    transform: translate(-3px, 1px);
  }
`;

const glitchAnim = keyframes`
  0% {
    clip: rect(35px, 9999px, 91px, 0);
  }
  10% {
    clip: rect(48px, 9999px, 37px, 0);
  }
  20% {
    clip: rect(14px, 9999px, 17px, 0);
  }
  30% {
    clip: rect(2px, 9999px, 14px, 0);
  }
  40% {
    clip: rect(52px, 9999px, 86px, 0);
  }
  50% {
    clip: rect(81px, 9999px, 12px, 0);
  }
  60% {
    clip: rect(27px, 9999px, 94px, 0);
  }
  70% {
    clip: rect(78px, 9999px, 57px, 0);
  }
  80% {
    clip: rect(72px, 9999px, 49px, 0);
  }
  90% {
    clip: rect(60px, 9999px, 20px, 0);
  }
  100% {
    clip: rect(7px, 9999px, 69px, 0);
  }
`;

const ErrorBody = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:before, &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &:before {
    background-color: var(--text-color);
    mix-blend-mode: overlay;
  }

  &:after {
    background: linear-gradient(90deg, var(--background-color) 21px, transparent 1%) center, 
                linear-gradient(var(--background-color) 21px, transparent 1%) center, white;
    background-size: 22px 22px;
    opacity: 0.2;
  }
`;

const Background = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  filter: grayscale(1);
  mix-blend-mode: luminosity;
`;

const randomNumber = Math.floor(Math.random() * 30);

const randomDelay = Math.floor(Math.random() * 600);

const Message = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 3;

  h1 {
    position: absolute;
    top: 10%;
    left: 0%;
    width: 100%;
    font-size: 10em;
    margin: 0;
    animation: ${shake} 600ms ease-in-out infinite alternate;
    text-shadow: 0 0 0.07em var(--text-color), -0.2em 0 2em rgba(175, 211, 61, .3), 0.2em 0 2em rgba(175, 211, 61, .3);
    user-select: none;
    &:before {
        content: attr(t);
        position: absolute;
        left: 50%;
        transform: translate(-50%, .34em);
        height: .1em;
        line-height: .5em;
        width: 100%;
        animation: ${scan} 500ms ease-in-out infinite alternate ${randomDelay}ms,${glitchAnim} 300ms ease-in-out infinite alternate;
        overflow: hidden;
        opacity: 0.7;}
    &:after {
        content: attr(t);
        position: absolute;
        top: ${randomNumber}px;
        left: 50%;
        transform: translate(-50%, .34em);
        height: .5em;
        line-height: .1em;
        width: 100%;
        animation: ${scan} 500ms ease-in-out infinite alternate ${randomDelay}ms,${glitchAnim} 300ms ease-in-out infinite alternate;
        overflow: hidden;
        opacity: 0.8;
        }
  }
`;

const Bottom = styled.div`
  position: absolute;
  top: 65%;
  left: 0;
  width: 100%;
    p, a {
    font-family: var(--font-family-monospace);
    font-size: 2em;
    text-shadow: 0 0 5px rgba(175, 211, 61, 0.3);
    filter: blur(0.8px);
    }

    a {
    position: relative;
    color: var(--text-color);
    text-decoration: none;
    font-weight: 700;
    border: 2px solid var(--text-color);
    text-transform: uppercase;
    padding: 5px 30px;
    box-shadow: inset 0 0 0 0 rgba(175, 211, 61, 0.2);
    transition: all 225ms ease-in-out;
    overflow: hidden;
    animation: ${attn} 3s ease-in-out infinite;
    &:hover {
        cursor: crosshair;
        box-shadow: inset 0 -2em 0 0 rgba(175, 211, 61, 0.2);
        transition: all 225ms ease-in-out;
        animation: none;
        &:before, &:after {
            transform: translate(-50%, 0) scale(0, 1);
      }
    }
      
      &:active {
        box-shadow: inset 0 -2em 0 0 rgba(175, 211, 61, 0.5);
        transition: all 225ms ease-in-out;
      }
      
      &::before, &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0) scale(1, 1);
        transform-origin: center;
        background-color: var(--background-color);
        width: 90%;
        height: 5px;
        transition: all 225ms ease-in-out;
        mix-blend-mode: hard-light;
      }
      
      &::before {
        top: -4px;
      }
      
      &::after {
        bottom: -4px;
      }
    }
    `;

function Notfound() {
    return (
        <>
            <GlobalStyle />
            <ErrorBody>
                <Background preload="auto" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/err.mp4" autoPlay muted loop></Background>
                <Message>
                    <h1 t="404">404</h1>
                    <Bottom>
                        <p>You have lost your way</p>
                        <a href="/">return home</a>
                    </Bottom>
                </Message>
            </ErrorBody>
        </>
    );
}

export default Notfound;