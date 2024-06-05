import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

&, &.light-mode {
  --text: #0d0806
  --background: #c0c2ce;
  --primary: 	#d2d4dc;
  --secondary:  #A2BBB7;
  --accent:#A4B3C6;
  --color: #333;
  --background-gradient: linear-gradient(90deg, rgba(162,187,183,1) 0%, rgba(255,248,220,1) 83%, rgba(164,179,198,1) 100%);
  --image-grayscale: 0;
  --image-opacity: 100%;
}

&.dark-mode {
--text: #2e3138;
--background: #191c23;
--background-gradient: linear-gradient(90deg, rgba(69,71,77,1) 0%, rgba(92,95,100,1) 5%, rgba(117,119,124,1) 100%);
--primary: #45474d;
--secondary: #5c5f64;
--accent: #75777c;
--color: #fff;
--image-grayscale: 10%;
--image-opacity: 90%;
}
 
}

*,
*::before,
*::after {
  
  padding: 0;
  margin: 0;
  

  /* Creating animations for dark mode */
  transition: background-color 0.7s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  padding: 0;
  margin: 0;
  background: var(--background-gradient);
  color: var(--color);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
span {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
   filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); 
}

@keyframes slide-in-fwd-bottom {
  0% {
    transform: translateZ(-1400px) translateY(800px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-elliptic-top-fwd {
  0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
  @keyframes slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
  }
}



`;

export default GlobalStyles;
