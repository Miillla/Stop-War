import { Link } from "gatsby";
import React, { useState } from "react";

import css from "styled-components";
import _conf from "../../conf/config";
import img_logo from "../../images/crest.svg";
import img_logo_light from "../../images/crest.svg";
import img_m_menu from "../../images/crest.svg";
import img_m_menu_light from "../../images/crest.svg";

const Wrap = css.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.light === "true" ? "#fff" : "#2f3f60")};
  @media (max-width: 640px) {
    height: 60px;
  }
`;
const Cont = css.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
    position: relative;
  }
`;
const Logo = css(Link)`
  display: inline-block;
  width: 130px;
  height: 100%;
  background: url(${(props) =>
    props.light === "true"
      ? img_logo_light
      : img_logo}) center left / 80px no-repeat;
`;

const Nav = css.ul`
  list-style: none;
  display: inline-block;
  vertical-align: top;
  margin-left: 40px;
  @media (max-width: 640px) {
    display: none;
  }
`;
const NavItem = css.li`
  float: left;
  font-size: 16px;
  padding: 0 20px;
  line-height: 80px;
  a{
    color: ${(props) => (props.light === "true" ? "#000" : "#fff")};
    &:hover{
      color: #035BD4;
    }
    &.active{
      color: #035BD4;
    }
  }
`;
const Toolbar = css.div`
  display: block;
  float: right;
  width: 60px;
  height: 100%;
  line-height: 80px;
  @media (max-width: 640px) {
    line-height: 60px;
  }
`;
const Github = css.a`
  font-size: 23px !important;
  color: #666;
  width: 20px;
  display: inline-block;
  cursor: pointer;
  &:hover{
    color: ${(props) => (props.light === "true" ? "#000" : "#fff")};
  }
  @media (max-width: 640px) {
    color: ${(props) => (props.light === "true" ? "#000" : "#fff")};
  }
`;
const Lang = css(Github)`
  margin-left: 20px;
`;
const MobileNav = css.ul`
  list-style: none;
  position: absolute;
  top: 60px;
  z-index: 99;
  ${(props) => (props.active ? "right: 0;" : "display: none;")}
  width: 100px;
  transition: all 0.3s ease-out;
`;
const MobileNavItem = css.li`
  font-size: 13px;
  line-height: 30px;
  height: 30px;
  background-color: ${(props) => (props.light === "true" ? "#fff" : "#000")};
  cursor: pointer;
  a{
    color: ${(props) => (props.light === "true" ? "#000" : "#fff")};
    display: block;
    padding: 0 10px;
    &:hover{
      color: #035BD4;
    }
    &.active{
      color: #035BD4;
      background-color: #141414;
    }
  }
  @media (min-width: 640px) {
    display: none;
  }
`;
const MobileMenuToggle = css.span`
  display: inline-block;
  width: 23px;
  height: 60px;
  vertical-align: top;
  margin-left: 15px;
  background: url(${(props) =>
    props.light === "true"
      ? img_m_menu_light
      : img_m_menu}) center / 100% no-repeat;
  @media (min-width: 640px) {
    display: none;
  }
`;

const Header = ({ siteTitle, light }) => {
  const [menuStatus, toggleMobileMenu] = useState(false);

  return (
    <Wrap light={light ? "true" : "false"}>
      <Cont className="clearfix">
        <Logo light={light ? "true" : "false"} to="/" />
        <Nav>
          {_conf.nav.map((item, index) => (
            <NavItem light={light ? "true" : "false"} key={index}>
              {/^http/.test(item.href) ? (
                <a target="_blank" href={item.href}>
                  {item.name}
                </a>
              ) : (
                <Link activeClassName="active" to={item.href}>
                  {item.name}
                </Link>
              )}
            </NavItem>
          ))}
        </Nav>
        <MobileNav light={light ? "true" : "false"} active={menuStatus}>
          {_conf.nav.map((item, index) => (
            <MobileNavItem light={light ? "true" : "false"} key={index}>
              {/^http/.test(item.href) ? (
                <a target="_blank" href={item.href}>
                  {item.name}
                </a>
              ) : (
                <Link activeClassName="active" to={item.href}>
                  {item.name}
                </Link>
              )}
            </MobileNavItem>
          ))}

          <MobileNavItem
            light={light ? "true" : "false"}
            key={"11"}
          ></MobileNavItem>
        </MobileNav>
        <Toolbar>
          <MobileMenuToggle
            light={light ? "true" : "false"}
            onClick={() => toggleMobileMenu(!menuStatus)}
          />
        </Toolbar>
      </Cont>
    </Wrap>
  );
};

export default Header;
