import {Link, useNavigate} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import THEME_COLORS from "../assets/THEME_COLORS.ts";
import redirect from "../utils/redirect.ts";


const Topbar = () => {

    const user = useAuthUser();
    const navigate = useNavigate();

    return (
        <div className={"flex justify-between"}>

            <div>
                <Link to={"/"}>
                    <img
                        src={"/ui/logo.webp"}
                        className={"h-14 w-auto"}
                        alt={"heathtom logo"}
                    />
                </Link>
            </div>
            <div className={"flex items-center"}>
                <Avatar
                    sx={{bgcolor: THEME_COLORS['primary-main']}}
                    children={user ? `${user.name.split(' ')[0][0]}${user.name.split(' ')[1][0]}` : 'HT'}
                    onClick={() => {
                        redirect(navigate, '/logout')
                    }}
                />
            </div>
        </div>
    );
}

export default Topbar;
