import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Application from './Application';

test('renders logo image', () => {
  render(<Application />);
  const logo = screen.getByRole('img');
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('alt', 'logo');
});

test('renders application subtitle', () => {
  render(<Application />);
  expect(screen.getByText(/Оставьте заявку и станьте частью нашей команды/i)).toBeInTheDocument();
});

test('renders text', () => {
  render(<Application />);
  expect(screen.getByText(/Компания SK Design приглашает/i)).toBeInTheDocument();
});

test('renders form fields', () => {
  render(<Application />);
  expect(screen.getAllByRole('textbox').length).toBe(5);
});

test('renders name field', () => {
  render(<Application />);
  expect(screen.getByLabelText('Ваше имя *')).toBeInTheDocument();
});

test('renders phone field', () => {
  render(<Application />);
  expect(screen.getByLabelText('Номер телефона *')).toBeInTheDocument();
});

test('renders email field', () => {
  render(<Application />);
  expect(screen.getByLabelText('E-mail *')).toBeInTheDocument();
});

test('renders link field', () => {
  render(<Application />);
  expect(screen.getByLabelText('Ссылка на профиль *')).toBeInTheDocument();
});

test('renders company field', () => {
  render(<Application />);
  expect(screen.getByLabelText('Название организации/студии')).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<Application />);
  expect(screen.getByText('Отправить заявку')).toBeInTheDocument();
});

test('show/hide button works', () => {
  render(<Application />);
  const buttons = screen.getAllByRole('button');
  buttons.forEach(button => fireEvent.click(button));
  expect(screen.getByLabelText('Получатель')).toBeInTheDocument();
});