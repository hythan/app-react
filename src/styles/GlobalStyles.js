import styled, { createGlobalStyle } from 'styled-components';
import {primaryColor, secondaryColor} from '../config/colors';


export default createGlobalStyle`
 * {
    margin:0;
    padding:0;
    outline:none;
    box-sizing: border-box;
   }

   body {
     font-family: sans-serif;
   }

   body, html, #root {
     height: 100%;
     background: ${primaryColor};
   }

   button {
     cursor: pointer;
     background: ${secondaryColor};
     color: #fff;
     border-radius: 4px;
     padding: 10px 20px;
     font-family: monospace;
     border:1px solid transparent;
   }

   button:hover {
     cursor: pointer;
     background:#fff;
     color: #000;
     border:1px solid ${secondaryColor};
   }

   a {
     text-decoration: none;
   }

   ul {
     list-style: none;
   }
 `;

export const Container = styled.section`
  max-width: 360px;
  background-color: white;
  margin: 30px auto;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
