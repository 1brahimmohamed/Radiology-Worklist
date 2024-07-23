import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <main className="flex-col px-4 sm:px-6 lg:px-8 space-y-5 py-2">

            <div className={"flex justify-start"}>
                <Link to={"/"}>
                    <img
                        src={"/ui/logo.webp"}
                        className={"h-14 w-auto"}
                        alt={"heathtom logo"}
                    />
                </Link>
            </div>

            <div className={"h-full"}>
                <Outlet/>
            </div>
        </main>
    )
}

export default MainLayout
