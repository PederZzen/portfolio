import { createGlobalStyle } from "styled-components";
import { breakpoints, colors } from "./utils/constants";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;;
    }

    body {
        background-color: ${colors.background};
        position: relative;
        padding-bottom: 8rem;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .maxWidth {
        max-width: ${breakpoints.desktop};
        margin: auto;
        padding: 0 0.5rem;
    }

    .button {
        display: inline-block;
        width: 10rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: ${colors.main};
        color: ${colors.light};
        font-weight: 600;
        border: 2px solid ${colors.main};
        transition: all .3s;
        cursor: pointer;
        
        &:hover {
            background-color: ${colors.light};
            color: ${colors.main};
        }
    }

    .headerStyling {
        position: relative;
        animation: fadein 2s;
        padding-top: 2rem;

        h1 {
            margin: 10rem 0 8rem;
            color: ${colors.main};
            position: relative;

            &::after {
            content: "";
            background-color: ${colors.accent};
            width: 4rem;
            height: 4px;
            border-radius: 1.5px;
            left: 0;
            bottom: -1rem;
            position: absolute;
            }
        }

        > span {
            position: absolute;
            font-size: 10rem;
            font-weight: 800;
            color: ${colors.main};
            top: 5rem;
            left: -4rem;
            opacity: 0.05;
        }

        @keyframes fadein {
            from {
            opacity: 0;
            }
            to {
            opacity: 1;
            }
        }
    }
`;
