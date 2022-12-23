import React from "react";
import classes from "./HeadList.module.css"
const HeadLink = (props) => {
    return(
        <li className={classes.list}>
            <a href = {props.to}>{props.name}</a>
        </li>
    )
}
export default HeadLink;