import { FormParams } from '../types/form';

const validate = (values: FormParams): any => {
  const errors: any = {};

  if (!values.name) {
    errors.name = 'Обязательное поле';
  } else if (values.name.length < 2) {
    errors.name = 'Неккоректное имя';
  }

  if (!values.phone) {
    errors.phone = 'Обязательное поле';
  } else if (values.phone.length < 10) {
    errors.phone = 'Неккоректный номер';
  }

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!/.+@.+\..+/i.test(values.email)) {
    errors.email = 'Неккоректный e-mail';
  }

  if (!values.link) {
    errors.link = 'Обязательное поле';
  } else if (values.link.length < 3) {
    errors.link = 'Неккоректная ссылка';
  }

  if (!values.city) {
    errors.city = 'Обязательное поле';
  }

  return errors;
};
export default validate;