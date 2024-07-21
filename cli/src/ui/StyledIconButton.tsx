import {styled, IconButton} from "@mui/material"
import THEME_COLORS from "../assets/THEME_COLORS.ts";

const StyledIconButton = styled(IconButton)`
  color: ${(props) => (props.selected ? THEME_COLORS["primary-light"] : THEME_COLORS["common-light"])};
  background-color: ${(props) => (props.selected ? 'black' : 'transparent')};
  border-radius: 0;

  &:hover {
    background-color: black;
  }
`;

export default StyledIconButton;
