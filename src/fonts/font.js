import { createGlobalStyle } from "styled-components";
import arial from "./arial.ttf";
import arialWoff from "./arial.woff";
import arialWoff2 from "./arial.woff2";
import sweet from "./sweet.ttf";
import sweetWoff from "./sweet.woff";
import sweetWoff2 from "./sweet.woff2";
export default createGlobalStyle`
    @font-face {
        font-family: 'arial';
        src: local('arial'), local('arial'),
        url(${arialWoff2}) format('woff2'),
        url(${arial}) format('ttf'),
        url(${arialWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'sweet';
        src: local('sweet'), local('sweet'),
        url(${sweetWoff2}) format('woff2'),
        url(${sweet}) format('ttf'),
        url(${sweetWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
`;
