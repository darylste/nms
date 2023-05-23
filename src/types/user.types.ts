export interface IUser {
  firstName: string;
  lastName: string;
  emailAddress: string;
  role: 'user' | 'admin';
}
