import { FormParams } from './form.d';

const validate = (values: FormParams): any => {
  const errors: any = {};

  if (!values.name) {
    errors.name = 'Name required';
  }

  if (!values.field1) {
    errors.field1 = 'Field1 required';
  }

  if (!values.field2) {
    errors.field2 = 'Field2 required';
  }

  return errors;
};
export default validate;