import React from "react";
import HeadLink from "../UI/HeadLink";
import classes from "./Navigation.module.css";
import logo from '../../../src/assets/logo.png'
const Navigation = () => {
  const header = {
    Home: "#",
    About: "#",
    Services: "#",
    Contact: "#"
  };
  const headList = Object.keys(header);
  return (
    <div className={classes.head}>
      <img className = {classes.logo} src = {logo} alt = "logo"/>
      <ul>
        {headList.map((title) => (
          <HeadLink name={title} to={header.title}></HeadLink>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
