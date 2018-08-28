import styled, { injectGlobal } from "styled-components";
import { NavLink } from "react-router-dom";

injectGlobal`
import url("https://fonts.googleapis.com/css?family=Roboto");

body {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 100%/1.5;
    vertical-align: baseline;
}
`;

export const theme = {
  mainBlack: "#1e202b",
  solidBlack: "#040404",
  mainBlue: "#08AEEA",
  maingGreen: "#2AF598",
  mainGradient: "linear-gradient(to right, #08AEEA, #2AF598)"
};

//Header/Nav

export const HeaderWrapper = styled.header`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 10vh;
  min-height: 100px;
  padding: 0 5%;
  background-color: #fafafa;
  nav {
    display: inline-block;
    width: 100%;
  }
  ul {
    float: right;
    list-style: none;
  }
  li {
    display: inline-block;
    margin-left: 50px;
    text-decoration: none;
    line-height: 50px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 2px;
    color: black;
  }
  b {
    text-decoration: none;
    line-height: 80px;
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 2px;
    color: black;
  }
`;

export const Navlink = styled(NavLink)`
 font-size: 12px;
 text-decoration: none;
  line-height: 40px;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 2px;
  color: black;
}
`;

export const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

export const MainSection = styled.section`
  display: flex;
`;
export const SectionA = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const SectionB = styled.section`
  flex: 1;
  height: 100vh;
  top: 0;
  position: sticky;
`;
export const FleXs = styled.div`
  display: flex;
`;

export const ProductX = styled.div`
  display: flex;
`;

export const PagXWrapper = styled.div`
  background-color: #b2f6fe;
  height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
`;
