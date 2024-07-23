import { FallingLines } from 'react-loader-spinner';
import THEME_COLORS from "../assets/THEME_COLORS.ts";

const Loading = () => {
    return (
        <div className={'h-[80vh] w-full flex justify-center items-center'}>
            <FallingLines
                color={THEME_COLORS["primary-main"]}
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    );
};

export default Loading;
