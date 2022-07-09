import React, {useState} from 'react';
import styled from 'styled-components';
import Button from "./Button";
import Select from "./Select";
import {InjectedFormProps, reduxForm, reset, submit} from 'redux-form';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitClick = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      dispatch(submit("ApplicationForm"));
      setIsSubmitting(false);
    },2000);
  };

  return (
    <FormContainer>
      <RowContainer>
        <TextField fieldName="name" label="Ваше имя *" placeholder="Иван" size="small" />
        <TextField fieldName="phone" label="Номер телефона *" placeholder="+7 (000) 000-00-00" size="small" mask="+7 (999) 999-99-99" />
      </RowContainer>
      <RowContainer>
        <TextField fieldName="email" label="E-mail *" placeholder="example@skdesign.ru" size="small" />
        <TextField fieldName="link" label="Ссылка на профиль *" placeholder="instagram.com/skde…" size="small" />
      </RowContainer>
      <Select fieldName="city" label="Выберите город *" selectValues={['first', 'second', 'third']} size="medium" />
      <TextField fieldName="company" label="Название организации/студии" placeholder="SK Design" size="medium" />



      <TextField fieldName="recipient" label="Получатель" placeholder="ФИО" size="medium" />
      <Select fieldName="resource" label="Откуда узнали про нас?" selectValues={['one', 'two', 'three']} size="medium" />
      <Button disabled={props.pristine || props.invalid} onClick={onSubmitClick} loading={isSubmitting} size="medium">
        Отправить заявку
      </Button>
    </FormContainer>
  );
}

const logResults = (values: Object) => {
  console.log(JSON.stringify(values, null, 2));
};

const resetForm = (result: Object, dispatch: Function) =>
  dispatch(reset('ApplicationForm'));

export const Form = reduxForm<{}>({
  form: "ApplicationForm",
  onSubmit: logResults,
  onSubmitSuccess: resetForm,
  validate
})(FormComponent);