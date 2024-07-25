import React, {createContext, useState, useContext, FC} from 'react';
import INITIAL_VIEWER_CONFIG from "./initialViewerConfig.ts";

type TViewerProvider = {
    children: React.ReactNode;
};

// Create a context
const ViewerContext = createContext();

// Create a provider component
const ViewerProvider: FC<TViewerProvider> = ({children}) => {
    const [viewerConfig, setViewerConfig] = useState(INITIAL_VIEWER_CONFIG);

    return (
        <ViewerContext.Provider value={{viewerConfig, setViewerConfig}}>
            {children}
        </ViewerContext.Provider>
    );
};

// Custom hook to use the context
const useViewerContext = () => useContext(ViewerContext);

export {ViewerProvider, useViewerContext};
