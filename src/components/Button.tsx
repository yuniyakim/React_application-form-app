import React from 'react';
import {default as styledComponents} from 'styled-components';
import {styled} from '@mui/material/styles';
import {CircularProgress} from "@mui/material";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean,
  loading?: boolean,
  size?: 'small'|'medium',
}

const StyledButton = styledComponents.div<{disabled?: boolean, size?: 'small'|'medium'}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({size = 'undefined'}) => size === 'small' ? '180px' : size === 'medium' ? '380px' : '156px'};
  height: 50px;
  background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#0086A8'};
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({disabled = false}) => disabled ? '#828282' : '#FFFFFF'};
  border-radius: 8px;
  
  &:hover {
    background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#007693'};
  }
  
  &:active {
    background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#00657E'};
  }
`;

const StyledCircularProgress = styled(CircularProgress)<{loading?: boolean}>`
  color: #FFFFFF;
  display: ${({loading = false}) => loading ? 'flex' : 'none'};
  width: 30px !important;
  height: 30px !important;
`;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton disabled={props.disabled} onClick={props.onClick} size={props.size}>
      {props.loading && ! props.disabled ? '' : props.children}
      <StyledCircularProgress loading={props.loading && ! props.disabled} />
    </StyledButton>
  )
}

export default Button;
