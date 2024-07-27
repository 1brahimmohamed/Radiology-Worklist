import React from "react";
import {Icon} from "@mui/material";
import Angle from "../assets/icons/angle.svg"
import Bidirectional from "../assets/icons/bi.svg"
import Circle from "../assets/icons/circle.svg"
import Erase from "../assets/icons/erase.svg"
import Freehand from "../assets/icons/freehand.svg"
import Length from "../assets/icons/length.svg"
import Rectangle from "../assets/icons/rectangle.svg"


// map icon name to icon image
const ICON_NAME = {
    'angle': Angle,
    "bidirectional": Bidirectional,
    'circle': Circle,
    'eraser': Erase,
    'free-hand': Freehand,
    'length': Length,
    'rectangle': Rectangle
}


const CustomIcon = ({iconName}: { iconName: string }) => {
    return (
        <Icon>
            <img src={ICON_NAME[iconName]} alt={"icon"}/>
        </Icon>
    )
};

export default CustomIcon;
