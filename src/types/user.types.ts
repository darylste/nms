export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password?: string;
  confirmPassword?: string;
  role: string;
}
