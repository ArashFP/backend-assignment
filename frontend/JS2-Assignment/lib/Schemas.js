import * as Yup from 'yup';

export const RegisterFormSchema = Yup.object({
  name: Yup.string()
    .required('You need to enter your full name!')
    .min(3, 'Your name must be at least 3 chars long!'),

  email: Yup.string()
    .email('You need to enter a valid email address!')
    .required('You need to enter an email address!'),

  message: Yup.string()
    .required('You need to enter a message!')
});