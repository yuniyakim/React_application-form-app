import React from 'react';
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

interface ShowHideButtonProps extends ButtonProps {
  expanded: boolean
}

const StyledShowHideButton = styled(Button)`
  width: 25px;
  height: 25px;
  padding: 0;
  
  &.MuiButton-root {
    min-width: 25px;
    min-height: 25px;
  }
  
  .MuiSvgIcon-root {
    fill: #353238;
    width: 25px;
  }
`;

const ShowHideButton: React.FC<ShowHideButtonProps> = (props) => {
  return (
    <StyledShowHideButton onClick={props.onClick} disableRipple>
      {props.expanded ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />}
    </StyledShowHideButton>
  )
}

export default ShowHideButton;
