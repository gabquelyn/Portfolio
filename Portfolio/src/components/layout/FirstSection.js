import React from "react";
import classes from "./FirstSection.module.css";
import photo from '../../assets/photo.png'
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
const FirstSection = () => {
  return (
    <div className={classes.section}>
      <CodeOffOutlinedIcon
        className={classes.stamp}
        style={{ top: "100", left: "10", fontSize: "5rem" }}
      />
      <div className={classes.left}>
            <AutoStoriesOutlinedIcon
                className={classes.stamp}
                style={{ top: "-100", right: "40", fontSize: "4rem" }}
                />
                <ModeEditOutlinedIcon
                className={classes.stamp}
                style={{ bottom: "-20", right: "-20", fontSize: "5rem" }}
            />
            <h1>
            Hello! I'm <br />
            Arebamen Gabriel
            </h1>
            <p>FULLSTACK WEB DEVELOPER (MERN STACK)</p>
            <button>
            Get resume <FileDownloadOutlinedIcon className={classes.icon} />
            </button>
      </div>
        <div className= {classes.right}>
            <div className={classes.behind}>
                <div className={classes.image}>
                    <img src ={photo} alt = "My look"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FirstSection;
