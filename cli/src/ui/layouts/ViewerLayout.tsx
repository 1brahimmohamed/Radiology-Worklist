import {Outlet} from "react-router-dom";
import {ViewerProvider} from "../../context/ViewerContext.tsx";
import initCornerstone from "../../utils/initCornerstone.js";
import ViewerSidebar from "../../features/viewer/ViewerSidebar.tsx";

initCornerstone();
const ViewerLayout = () => {
    return (
        <ViewerProvider>
            <div className={'w-full'}>

                <div className={'flex h-[100vh]'}>
                    <div className={'h-full w-12 max-w-52'}>
                        <ViewerSidebar />
                    </div>
                    <div className={'h-auto flex-grow w-11/12'} onContextMenu={(e) => e.preventDefault()}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </ViewerProvider>
    )
}

export default ViewerLayout;
