import {Chip} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import CloseIcon from '@mui/icons-material/Close';
import ScheduleIcon from '@mui/icons-material/Schedule';

const STATUS = {
    'Scheduled' : <ScheduleIcon/>,
    'Arrived' : <WhereToVoteIcon/>,
    'Canceled' : <CloseIcon/>,
    'Completed' : <CheckIcon/>,
};

const STATUS_COLOR = {
    'Scheduled,' : 'primary',
    'Arrived' : 'warning',
    'Canceled' : 'error',
    'Completed' : 'success',
};

const StatusChip =  ({status}) => {
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
