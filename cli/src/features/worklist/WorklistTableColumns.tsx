import { GridColDef } from "@mui/x-data-grid";
import StatusChip from "../../ui/StatusChip.tsx";

const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
}

const WORKLIST_TABLE_COLUMNS: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Exam ID',
        width: 100
    },

    {
        field: 'type',
        headerName: 'Type',
        width: 150
    },

    {
        field: 'date',
        headerName: 'Exam Date',
        type: 'date',
        width: 120,
        valueFormatter: (value) => new Date(value).toLocaleDateString("en-US",dateOptions)
    },

    {
        field: 'time',
        headerName: 'Exam Time',
        type: 'date',
        width: 120,
        valueFormatter: (value) => new Date(value).toLocaleTimeString("en-US",timeOptions),
    },

    {
        field: 'nationalId',
        headerName: 'National ID',
        width: 160
    },

    {
        field: 'name',
        headerName: 'Name',
        width: 130
    },

    {
        field: 'email',
        headerName: 'Email',
        width: 250
    },

    {
        field: 'birthday',
        headerName: 'Birthdate',
        type: 'date',
        width: 140,
        valueFormatter: (value) => new Date(value).toLocaleDateString("en-US", dateOptions)
    },

    {
        field: 'age',
        headerName: 'Age',
        type: 'string',
        width: 90,

    },

    {
        field: 'gender',
        headerName: 'Gender',
        width: 130
    },

    {
        field: 'comments',
        headerName: 'Comments',
        width: 305
    },

    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: (params) => <StatusChip status={params.row.status} />,
    },
];

export default WORKLIST_TABLE_COLUMNS;
