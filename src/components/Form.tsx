import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import Select from "./Select";
import {InjectedFormProps, reduxForm, submit} from 'redux-form';
import {useDispatch} from 'react-redux';
import TextField from "./TextField";
import validate from "./validate";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 440px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
`;

const FormComponent: React.FC<InjectedFormProps> = (props) => {
  const dispatch = useDispatch();

  const onSubmitClick = () => {
    dispatch(submit("ApplicationForm"));
  };

  return (
    <FormContainer>
      <RowContainer>
        <TextField fieldName="name" label="Ваше имя *" placeholder="Иван" size="small" />
        <TextField fieldName="phone" label="Номер телефона *" placeholder="+7 (000) 000-00-00" size="small" />
      </RowContainer>
      <RowContainer>
        <TextField fieldName="email" label="E-mail *" placeholder="example@skdesign.ru" size="small" />
        <TextField fieldName="link" label="Ссылка на профиль *" placeholder="instagram.com/skde…" size="small" />
      </RowContainer>
      <Select fieldName="city" label="Выберите город *" selectValues={['first', 'second', 'third']} size="medium" />
      <TextField fieldName="company" label="Название организации/студии" placeholder="SK Design" size="medium" />


      <TextField fieldName="recipient" label="Получатель" placeholder="ФИО" size="medium" />
      <Select fieldName="resource" label="Откуда узнали про нас?" selectValues={['one', 'two', 'three']} size="medium" />
      <Button disabled={props.pristine || props.invalid} onClick={onSubmitClick} loading size="medium">
        Отправить заявку
      </Button>
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