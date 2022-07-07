import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {default as SelectMUI, SelectProps} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import {styled} from '@mui/material/styles';
import {Field, WrappedFieldProps} from 'redux-form';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const CustomizedSelect = styled(SelectMUI)`
  width: 300px;
  height: 50px;
  text-align: start;
  background-color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #353238;
  border-radius: 8px;

  .Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #0086A8;
    }
  }
  
  .MuiOutlinedInput-notchedOutline {
    border: 2px solid #E3E3E3;
  }
  
  .MuiSvgIcon-root {
    fill: #353238;
    width: 25px;
  }
`;

const SelectComponent: React.FC<WrappedFieldProps & SelectProps> = ({
                                                                      input,
                                                                      label,
                                                                      meta: {touched, error},
                                                                      children
                                                                    }) => (
  <CustomizedSelect
    error={touched && error}
    {...input}
    onChange={(event) => input.onChange(event.target.value)}
    variant="outlined"
    children={children}
    label={label}
    IconComponent={KeyboardArrowDownRoundedIcon}
  />
);

const Select = (props: { fieldName: string, selectValues: string[], required?: boolean }) => {
  return (
    <FormControl>
      <InputLabel>{props.required ? props.fieldName + '*' : props.fieldName}</InputLabel>
      <Field name={props.fieldName} component={SelectComponent} label={props.fieldName}>
        {props.selectValues.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Field>
      {props.required ? <FormHelperText error>Обязательное поле</FormHelperText> : <></>}
    </FormControl>
  )
}

export default Select;