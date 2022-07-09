import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import Select from "./Select";
import {InjectedFormProps, reduxForm, submit} from 'redux-form';
import {useDispatch} from 'react-redux';
import TextField from "./TextField";
import validate from "./validate";
import {CircularProgress} from '@mui/material';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 440px;
`;

const FormComponent: React.FC<InjectedFormProps> = (props) => {
  const dispatch = useDispatch();

  const onSubmitClick = () => {
    dispatch(submit("ApplicationForm"));
  };

  return (
    <FormContainer>
      <Button disabled={props.pristine || props.invalid} onClick={onSubmitClick} loading>
        click
      </Button>
      <Button disabled>don't click</Button>
      <TextField required fieldName="name" placeholder="Иван" />
      <Select required fieldName="field1" selectValues={['first', 'second', 'third']} />
      <Select fieldName="field2" selectValues={['one', 'two', 'three']} />
    </FormContainer>
  );
}

const showResults = (values: Object) => {
  setTimeout(() => {
      console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }
  ,1000);
};

export const Form = reduxForm<{}>({
  form: "ApplicationForm",
  onSubmit: showResults,
  validate
})(FormComponent);