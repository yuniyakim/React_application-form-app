import React, {useState} from 'react';
import styled from 'styled-components';
import TextField from "./TextField";
import Select from "./Select";
import ShowHideButton from "./ShowHideButton";
import Button from "./Button";
import {InjectedFormProps, reduxForm, reset, submit} from 'redux-form';
import {useDispatch} from 'react-redux';
import validate from "../utils/validate";
import cities from '../data/cities.json';
import sources from '../data/sources.json';
import {Data} from "../types/data";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 440px;

  margin-left: 8px;
  margin-right: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 20px 0;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 380px;
`;

const ShowHideContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 380px;
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const FormComponent: React.FC<InjectedFormProps> = (props) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const sourcesData: Data[] = sources.map(source => {
    return {id: source, name: source};
  });

  const onSubmitClick = () => {
    dispatch(submit('ApplicationForm'));
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    },2000);
  };

  return (
    <FormContainer>
      <RowContainer>
        <TextField fieldName="name" label="Ваше имя *" placeholder="Иван" size="small" />
        <TextField fieldName="phone" label="Номер телефона *" placeholder="+7 (000) 000-00-00" size="small" mask="+9 (999) 999-99-99" />
      </RowContainer>
      <RowContainer>
        <TextField fieldName="email" label="E-mail *" placeholder="example@skdesign.ru" size="small" />
        <TextField fieldName="link" label="Ссылка на профиль *" placeholder="instagram.com/skde…" size="small" />
      </RowContainer>
      <Select fieldName="city" label="Выберите город *" selectValues={cities} size="medium" />
      <TextField fieldName="company" label="Название организации/студии" placeholder="SK Design" size="medium" />

      <ShowHideContainer>
        {expanded ? 'Скрыть дополнительные поля' : 'Показать дополнительные поля'}
        <ShowHideButton expanded={expanded} onClick={() => setExpanded(!expanded)} />
      </ShowHideContainer>

      <TextField fieldName="recipient" label="Получатель" placeholder="ФИО" size="medium" hidden={!expanded} />
      <Select fieldName="resource" label="Откуда узнали про нас?" selectValues={sourcesData} size="medium" hidden={!expanded} />
      <Button disabled={props.pristine || props.invalid} onClick={onSubmitClick} loading={isSubmitting} size="medium">
        Отправить заявку
      </Button>
    </FormContainer>
  );
}

const logResults = (values: Object) => {
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2));
  }, 2000);
};

const resetForm = (result: Object, dispatch: Function) => {
  setTimeout(() => {
    dispatch(reset('ApplicationForm'));
  }, 2000);
}

export const Form = reduxForm<{}>({
  form: 'ApplicationForm',
  onSubmit: logResults,
  onSubmitSuccess: resetForm,
  validate
})(FormComponent);