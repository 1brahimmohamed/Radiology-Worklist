import {FC} from "react";
import {Chip} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import CloseIcon from '@mui/icons-material/Close';
import ScheduleIcon from '@mui/icons-material/Schedule';

type TStatusChip = {
    status: string;
};

// map status to icon
const STATUS = {
    'Scheduled': <ScheduleIcon/>,
    'Arrived': <WhereToVoteIcon/>,
    'Canceled': <CloseIcon/>,
    'Completed': <CheckIcon/>,
};

// map status to color
const STATUS_COLOR = {
    'Scheduled,': 'primary',
    'Arrived': 'warning',
    'Canceled': 'error',
    'Completed': 'success',
};

const StatusChip: FC<TStatusChip> = ({status}) => {
    return (
        <Chip
            label={status}
            onDelete={() => {}}
            deleteIcon={STATUS[status]}
            color={STATUS_COLOR[status]}
            variant="filled"
        />
    )
}

export default StatusChip;
