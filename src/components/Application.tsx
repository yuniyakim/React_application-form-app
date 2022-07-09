import React from 'react';
import styled from 'styled-components';
import {Form} from "./Form";
import {Provider} from "react-redux";
import logo from '../assets/logo.svg';
import store from '../utils/store';

const ApplicationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 931px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 940px;
  gap: 40px;
`;

const Logo = styled.img`
  width: 474.46px;
  height: 70px;
`;

const Subtitle = styled.div`
  color: #353238;
  font-family: 'SF UI Display', sans-serif;
  font-weight: 600;
  font-size: 24px;
`;

const Text = styled.div`
  color: #353238;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  gap: 21px;
`;

const TextParagraph = styled.p`
  margin: 0;
`;

const TextLink = styled.a`
  color: #0086A8;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Application = () => {
  return (
    <Provider store={store}>
      <ApplicationContainer>
        <TextContainer>
          <Logo src={logo} alt="logo" />
          <Subtitle>Оставьте заявку и станьте частью нашей команды</Subtitle>
          <Text>
            <TextParagraph>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов,
              дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.</TextParagraph>
            <TextParagraph>Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания
              и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.</TextParagraph>
            <TextParagraph>Ознакомиться с проектами можете в нашем <TextLink href='https://skdesign.ru/portfolio'>портфолио</TextLink>. Если Вы оформляете интерьеры жилых или коммерческих помещений —
              мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров)
              и разработаем коммерческое предложение к Вашему проекту или изображениям.</TextParagraph>
          </Text>
        </TextContainer>
        <Form />
      </ApplicationContainer>
    </Provider>
  );
}

export default Application;