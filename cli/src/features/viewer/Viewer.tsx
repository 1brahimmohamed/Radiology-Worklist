import React, {useState, useEffect} from 'react'
import CornerstoneViewport from 'react-cornerstone-viewport'
import {useViewerContext} from "../../context/ViewerContext.tsx";


const Viewer = () => {

    // hooks
    const {viewerConfig, setViewerConfig} = useViewerContext();
    const [isImageIDs, setIsImageIDs] = useState(false);

    // check that the viewport is not empty and has image ids on component mount
    useEffect(() => {
        if (viewerConfig.imageIds.length > 0) {
            setIsImageIDs(true);
        }
    }, [viewerConfig.imageIds]);


    return (
        <div className={"bg-black h-full w-full h-screen"}>
            {isImageIDs && viewerConfig.viewports.map(viewportIndex => (
                <div key={viewportIndex} className={"flex flex-1 h-full"}>
                    <CornerstoneViewport
                        style={{flex: '1', minWidth: '100%', height: '100%'}}
                        tools={viewerConfig.tools}
                        imageIds={viewerConfig.imageIds}
                        imageIdIndex={viewerConfig.imageIdIndex}
                        isPlaying={viewerConfig.isPlaying}
                        frameRate={viewerConfig.frameRate}
                        className={viewerConfig.activeViewportIndex === viewportIndex ? 'active' : ''}
                        activeTool={viewerConfig.activeTool}
                        setViewportActive={() => {
                            setViewerConfig((prevViewerConfig) => ({
                                ...prevViewerConfig,
                                activeViewportIndex: viewportIndex,
                            }));
                        }}
                    />
                </div>
            ))}
        </div>
    )
}

export default Viewer
