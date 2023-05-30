import * as yup from 'yup';

export const UserSchema = yup.object().shape({
  firstName: yup.string().required('A user must have a first name.'),
  lastName: yup.string().required('A user must have a last name.'),
  emailAddress: yup
    .string()
    .email('Please enter a valid email address.')
    .required('A user must have an email address.'),
  role: yup
    .string()
    .oneOf(['admin', 'user'], "Role must be either 'admin' or 'user'"),
});
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password?: string;
  confirmPassword?: string;
  role: string;
}
