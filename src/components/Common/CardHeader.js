import React from 'react'
import { BsMicrosoft } from "react-icons/bs";
import { IoLogoPlaystation } from "react-icons/io";
import { SiXbox } from "react-icons/si";

const CardHeader = ({ platform }) => {


    if (platform === "XBOX SERIES X") {
        return (<div className="card-header bg-success h5"><SiXbox /> {platform}</div>);
    } else if (platform === "PS5") {
        return (<div className="card-header bg-primary h5"><IoLogoPlaystation /> {platform}</div>);
    } else if (platform === "PC") {
        return (<div className="card-header bg-secondary h5"><BsMicrosoft /> {platform}</div>);
    } else {
        return (<></>);
    }

};

export default CardHeader;
