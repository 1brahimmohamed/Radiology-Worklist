import ContrastIcon from "@mui/icons-material/Contrast";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CustomIcon from "../../ui/CustomIcon.tsx";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const DIAGNOSIS_TOOLS = [
    {
        name: "Contrast",
        icon: <ContrastIcon/>,
        action: "Wwwc",
    },
    {
        name: "Pan",
        icon: <OpenWithIcon/>,
        action: "Pan",
    },
    {
        name: "Rotate",
        icon: <RotateLeftIcon/>,
        action: "Rotate",
    },
    {
        name: "Zoom",
        icon: <ZoomInIcon/>,
        action: "Zoom",
    },
    {
        name: "Length",
        icon: <CustomIcon iconName={"length"}/>,
        action: "Length",
    },
    {
        name: "Angle",
        icon: <CustomIcon iconName={"angle"}/>,
        action: "Angle",
    },
    {
        name: "Rectangle",
        icon: <CustomIcon iconName={"rectangle"}/>,
        action: "RectangleRoi",
    },
    {
        name: "Circle",
        icon: <CustomIcon iconName={"circle"}/>,
        action: "CircleRoi",
    },
    {
        name: "Bidirectional",
        icon: <CustomIcon iconName={"bidirectional"}/>,
        action: "Bidirectional",
    },
    {
        name: "Free Hand",
        icon: <CustomIcon iconName={"free-hand"}/>,
        action: "FreehandRoi",
    },
    {
        name: "Eraser",
        icon: <CustomIcon iconName={"eraser"}/>,
        action: "Eraser",
    },
    {
        name: "Cine",
        icon: <PlayCircleIcon/>,
        action: "Cine",
    }
]

export default DIAGNOSIS_TOOLS;
