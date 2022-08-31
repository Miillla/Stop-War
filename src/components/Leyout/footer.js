import React, { useState } from "react";

import css from "styled-components";

const Wrap = css.div`
  width: 100%;
  // height: 305px;
  box-sizing: border-box;
  background-color: #2f3f60;
  @media (max-width: 640px) {
    height: 50px;
    box-sizing: border-box;
  }
`;
const Cont = css.div`
  width: 100px;
  // height: 305px;
  margin: 0 auto;
  display: flex;
  padding: 60px 0;
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    padding: 10px 60px;
    &>div:not(:last-child){
      display: none;
    }
  }
`;

const Footer = ({ siteTitle }) => {
  return (
    <>
      <Wrap>
        <Cont></Cont>
      </Wrap>
    </>
  );
};

export default Footer;
