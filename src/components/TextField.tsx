import React from "react";
import FormControl from '@mui/material/FormControl';
import {default as TextFieldMUI, TextFieldProps} from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import {Field, WrappedFieldProps} from 'redux-form';
import {createTextMask} from 'redux-form-input-masks';

const StyledTextField = styled(TextFieldMUI)<TextFieldProps>`
  display: ${({hidden = false}) => hidden ? 'none' : 'flex'};
  width: ${({size = 'undefined'}) => size === 'small' ? '180px' : size === 'medium' ? '380px' : '300px'};
  margin-top: 8.625px;
  margin-bottom: ${({error = false}) => error ? '15px' : '20px'};

  .Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #0086A8 !important;
      border-radius: 8px;
    }
  }
  
  .MuiOutlinedInput-notchedOutline {
    height: 52px;
    text-align: start;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    border: 2px solid ${({error = false}) => error ? '#EB5E55 !important' : '#E3E3E3'};
    border-radius: 8px;
  }

  .MuiOutlinedInput-root {
    height: 50px;
  }

  .MuiOutlinedInput-input {
    height: ${({size = 'undefined'}) => size === 'small' ? '33px' : size === 'medium' ? '17px' : '19px'};
    border-radius: 8px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;

    &::placeholder {
      color: #CDCAD0;
    }
  }

  // Label
  .MuiInputLabel-root {
    padding-top: 4px;
    font-family: 'SF UI Display', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: ${({error = false}) => error ? '#EB5E55' : '#353238'};
    
    &.Mui-focused {
      color: #0086A8;
    }
  }

  legend {
    font-size: 9px;
  }

  // Helper
  .MuiFormHelperText-root {
    margin-top: 8px;
    margin-left: 15px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
`;

const TextFieldComponent: React.FC<WrappedFieldProps & TextFieldProps> = ({
                                                                            hidden,
                                                                            size,
                                                                            placeholder,
                                                                            input,
                                                                            label,
                                                                            meta: {touched, error},
                                                                            ...custom
                                                                          }) => (
  <StyledTextField
    hidden={hidden}
    size={size}
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

const TextField = (props: {fieldName: string, label: string, placeholder: string, size?: 'small'|'medium', mask?: string, hidden?: boolean}) => {
  if (!props.mask) {
    return (
      <FormControl>
        <Field
          name={props.fieldName}
          component={TextFieldComponent}
          label={props.label}
          placeholder={props.placeholder}
          size={props.size}
          hidden={props.hidden}
        />
      </FormControl>
    )
  }

  const mask = createTextMask({
    pattern: props.mask,
    guide: false,
    allowEmpty: true,
  });

  return (
    <FormControl>
      <Field
        name={props.fieldName}
        component={TextFieldComponent}
        label={props.label}
        placeholder={props.placeholder}
        size={props.size}
        hidden={props.hidden}
        {...mask}
      />
    </FormControl>
  )
}

export default TextField;