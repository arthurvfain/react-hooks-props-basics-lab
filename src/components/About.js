import React from "react";
import Links from "./Links"

function About(props) {
  //console.log(props.bio)
  return (
    <div id="about">
      <h1>About Me</h1>
      {props.bio === "" || props.bio === undefined ?  null : <p>{props.bio}</p>}
      {/* why does backwards not work ? */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.links.github} linkedin = {props.links.linkedin}/>
    </div>
  );
}

export default About;
