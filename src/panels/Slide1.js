import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import logo from "../img/logo.svg";



const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
* {
    font-family: Montserrat;
}
  body {
    background-color: #ACECF0;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
`;

const Section = styled.section`
  position: relative;
  height: 563px;
  background: linear-gradient(12deg, #f9d037 35%, #acecf0 20%);
  p {
    position: absolute;
    margin: 0;
    bottom: 6.9%;
    left: 11.3%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;
  }
`;

const Div = styled.div`
  position: absolute;
  width: 29.4%;
  height: 64.7%;
  top: 16.5%;
  left: 11.3%;
  background: #82c8d6;
  @media all and (max-width: 414px) {
      display: none;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  top: 16.5%;
  right: 8.5%;
  h1 {
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    text-align: right;
    letter-spacing: -0.1em;
    text-transform: uppercase;
    color: #000000;
  }
  img {
    width: 49%;
    margin-top: 3.7%;
  }
`;

const H2 = styled.h2`
  margin: 0;
  margin-top: ${props => (props.style ? "20.6%" : "2.5%")};
  font-family: Montserrat;
  font-style: normal;
  font-weight: ${props => (props.style ? "900" : "800")};
  font-size: ${props => (props.style ? "64px" : "24px")};
  line-height: 100%;
  text-align: right;
  letter-spacing: ${props => (props.style ? "0.025em" : "0.15em")};
  text-transform: uppercase;
  color: ${props => (props.style ? "white" : "")};
  text-shadow: ${props =>
    props.style ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : ""};

@media all and (max-width: 690px) {
    font-size: ${props => (props.style ? "30px" : "15px")};
}
`;

const Slide1 = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Section>
        <Div />
        <TextBlock>
          <h1>
            Летние городские смены <br /> "алгоритмики"
          </h1>
          <img src={logo} align="right" alt="Алгоритмика" />
          <H2 style>Лаборатория</H2>
          <H2>Цифровых проектов</H2>
        </TextBlock>
        <p>Образовательное приключение для детей от 7 до 12 лет</p>
      </Section>
      
    </Wrapper>
    
  </>
);

export default Slide1;
