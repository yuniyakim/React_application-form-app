import React from "react";
import FormControl from '@mui/material/FormControl';
import {default as TextFieldMUI, TextFieldProps} from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import {styled} from '@mui/material/styles';
import {Field, WrappedFieldProps} from 'redux-form';

const StyledTextField = styled(TextFieldMUI)`
  width: 300px;
  margin-top: 8.625px;

  .Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #0086A8;
      border-radius: 8px;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    height: 50px;
    text-align: start;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #353238;
    border: 2px solid #E3E3E3;
    border-radius: 8px;
  }

  .MuiOutlinedInput-root {
    height: 50px;
  }

  .MuiOutlinedInput-input {
    height: 17px;
    border-radius: 8px;
  }
`;

const TextFieldComponent: React.FC<WrappedFieldProps & TextFieldProps> = ({
                                                                            placeholder,
                                                                            input,
                                                                            label,
                                                                            meta: {touched, error},
                                                                            ...custom
                                                                          }) => (
  <StyledTextField
    error={!!(touched && error)}
    {...input}
    {...custom}
    onChange={(event) => input.onChange(event.target.value)}
    variant="outlined"
    label={label}
    placeholder={placeholder}
    InputLabelProps={{shrink: true}}
    helperText={!!(touched && error) ? error : ''}
  />
);

const TextField = (props: {fieldName: string, required?: boolean, placeholder: string}) => {
  return (
    <FormControl>
      {/*<InputLabel>{props.required ? props.fieldName + '*' : props.fieldName}</InputLabel>*/}
      <Field name={props.fieldName} component={TextFieldComponent} label={props.fieldName} placeholder={props.placeholder} />
      {/*{props.required ? <FormHelperText error>Обязательное поле</FormHelperText> : <></>}*/}
    </FormControl>
  )
}

export default TextField;