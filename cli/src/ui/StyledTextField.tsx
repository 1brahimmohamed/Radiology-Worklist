// Create a custom styled TextField component
import {styled, TextField} from "@mui/material";

const CustomTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        height: 5,  // Adjust the height of the input element
    },
    '& .MuiFormControl-root': {
        height: 5  // Adjust the overall height of the TextField
    },
});
export default CustomTextField
