import { Outlet} from "react-router-dom";
import Topbar from "../Topbar.tsx";

const MainLayout = () => {
    return (
        <main className="flex-col px-4 sm:px-6 lg:px-8 space-y-10 py-2">

            <div>
                <Topbar />
            </div>

            <div className={"h-full"}>
                <Outlet/>
            </div>
        </main>
    )
}

export default MainLayout
