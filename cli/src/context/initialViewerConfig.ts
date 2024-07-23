import createImageIds from "../utils/createImageIds.ts";

const INITIAL_VIEWER_CONFIG = {
    activeViewportIndex: 0,
    viewports: [0],
    tools: [
        // Mouse
        {
            name: 'Wwwc',
            mode: 'active',
            modeOptions: {mouseButtonMask: 1},
        },
        {
            name: 'Zoom',
            mode: 'active',
            modeOptions: {mouseButtonMask: 2},
        },
        {
            name: 'Pan',
            mode: 'active',
            modeOptions: {mouseButtonMask: 4},
        },
        'Length',
        'Angle',
        'Bidirectional',
        'FreehandRoi',
        'RectangleRoi',
        'CircleRoi',
        'Eraser',
        "Rotate",
        // Scroll
        {name: 'StackScrollMouseWheel', mode: 'active'},
        // Touch
        {name: 'PanMultiTouch', mode: 'active'},
        {name: 'ZoomTouchPinch', mode: 'active'},
        {name: 'StackScrollMultiTouch', mode: 'active'},
    ],
    imageIds: createImageIds(),
    // FORM
    activeTool: 'Wwwc',
    imageIdIndex: 0,
    isPlaying: false,
    frameRate: 10,
}


export default INITIAL_VIEWER_CONFIG
