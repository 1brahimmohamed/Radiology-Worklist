import {useRef} from "react";
import {useViewerContext} from "../../context/ViewerContext.tsx";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import {Link} from "react-router-dom";
import {Tooltip} from "@mui/material";
import StyledIconButton from "../../ui/StyledIconButton.tsx";
import UploadIcon from '@mui/icons-material/Upload';
import LogoIcon from "../../assets/ui/icon.png"
import DIAGNOSIS_TOOLS from "./ViewerTools.tsx";

const ViewerSidebar = () => {

    // hooks
    const {viewerConfig, setViewerConfig} = useViewerContext();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // event handlers
    const handleFileInputChange = (event) => {
        const files = event.target.files;
        const imageIds = [];

        // load the DICOM images using the WADO image loader
        for (const file of files) {
            imageIds.push(cornerstoneWADOImageLoader.wadouri.fileManager.add(file));
        }

        // set the image ids in the viewer state to view them
        setViewerConfig((prevConfig) => ({
            ...prevConfig,
            imageIds,
        }));

    }

    const handleUploadButtonClick = () => {
        fileInputRef.current?.click();
    }

    const setSelectedTool = (newTool) => {

        // if the user selected the cine then reverse the current state without changing the tool
        if ('Cine' === newTool) {
            setViewerConfig(prevState => {
                return {
                    ...prevState,
                    isPlaying: !prevState.isPlaying
                }
            })
        } else {
            // change the piece of state the changes only the active tool on left mouse click
            setViewerConfig((prevState) => {
                const updatedTools = prevState.tools.map((tool, index) => {
                    if (index === 0) {
                        return {
                            ...tool,
                            name: newTool,
                        };
                    }
                    return tool;
                });
                return {
                    ...prevState,
                    tools: updatedTools,
                    activeTool: newTool
                };
            });
        }
    };


    return (
        <div className={"h-full flex-col bg-[#24292d] text-center py-2"}>

            {/* LOGO */}
            <div className={"p-1 mb-2"}>
                <Link to={"/"}>
                    <img src={LogoIcon} alt={"logo icon"}/>
                </Link>
            </div>

            {/* UPLOAD */}
            <input
                type="file"
                multiple
                ref={fileInputRef}
                className={"hidden"}
                onChange={handleFileInputChange}
            />

            <div>
                <Tooltip title={"Upload"} placement="right">
                    <div className={"rounded-xl overflow-hidden"}>
                        <StyledIconButton
                            onClick={handleUploadButtonClick}
                        >
                            <UploadIcon/>
                        </StyledIconButton>
                    </div>
                </Tooltip>
            </div>

            <hr className={"mx-2 my-5 border-common-black"}/>

            {/* TOOLS */}
            <div className={"flex-col space-y-2"}>
                {DIAGNOSIS_TOOLS.map((tool, index) => (
                    <Tooltip title={tool.name} placement="right" key={index}>
                        <div className={"rounded-xl overflow-hidden"}>
                            <StyledIconButton
                                onClick={() => setSelectedTool(tool.action)}
                                selected={viewerConfig.activeTool == tool.action}
                            >
                                {tool.icon}
                            </StyledIconButton>
                        </div>
                    </Tooltip>
                ))}
            </div>

        </div>
    )
}

export default ViewerSidebar;
