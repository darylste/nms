import React, { FC, useState } from 'react';
import { Text, SidebarFooter, Input, Spacer, Button } from '@atomic';
import { Formik } from 'formik';
import * as yup from 'yup';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

import styles from './CreateAccountSection.module.scss';
import Link from 'next/link';

interface IFormValues {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

const CreateAccountSection: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const router = useRouter();

  const initialFormValues: IFormValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  };
  const userSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, 'First name must be at least 2 characters.')
      .max(30, 'First name cannot exceed 30 characters.')
      .required('Please enter your first name.'),
    lastName: yup
      .string()
      .min(2, 'Last name must be at least 2 characters.')
      .max(50, 'Last name cannot exceed 50 characters.')
      .required('Please enter your last name.'),
    emailAddress: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Please enter your email address.'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .required('Create a password.'),
    confirmPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .required('Repeat your password'),
  });

  return (
    <div className={styles.createAccountSection}>
      <SidebarFooter />
      <main className={styles.mainSection}>
        <Text varient='h1'>Create an Account</Text>
        <Spacer top='xl' />
        <Formik
          initialValues={initialFormValues}
          validationSchema={userSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              try {
                const res = await fetch(
                  'http://127.0.0.1:3000/api/v1/users/signup',
                  {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                  },
                );
                const data = await res.json();

                if (data.status === 'fail' || data.status === 'error') {
                  throw new Error();
                } else {
                  cookie.set('token', data.token);
                  cookie.set('user', JSON.stringify(data.data.user));
                  router.push('/');
                }
              } catch (err: any) {
                setErrorMessage(err.message);
              } finally {
                setSubmitting(false);
              }
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              {errorMessage && <div className='error-msg'>{errorMessage}</div>}
              <div className={styles.doubleInputContainer}>
                <div className={styles.inputContainer}>
                  <Input
                    name='firstName'
                    placeholder='First Name'
                    type='text'
                    onChange={handleChange as any}
                    onBlur={handleBlur as any}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className='error-msg'>{errors.firstName}</div>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <Input
                    name='lastName'
                    placeholder='Last Name'
                    type='text'
                    onChange={handleChange as any}
                    onBlur={handleBlur as any}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName && (
                    <div className='error-msg'>{errors.lastName}</div>
                  )}
                </div>
              </div>
              <div className={styles.inputContainer}>
                <Input
                  name='emailAddress'
                  placeholder='Email Address'
                  type='email'
                  onChange={handleChange as any}
                  onBlur={handleBlur as any}
                  value={values.emailAddress}
                />
                {touched.emailAddress && errors.emailAddress && (
                  <div className='error-msg'>{errors.emailAddress}</div>
                )}
              </div>
              <div className={styles.inputContainer}>
                <Input
                  name='password'
                  placeholder='Password'
                  type='password'
                  onChange={handleChange as any}
                  onBlur={handleBlur as any}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <div className='error-msg'>{errors.password}</div>
                )}
              </div>
              <div className={styles.inputContainer}>
                <Input
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  type='password'
                  onChange={handleChange as any}
                  onBlur={handleBlur as any}
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className='error-msg'>{errors.confirmPassword}</div>
                )}
              </div>
              <Button
                varient='form'
                fullWidth
                isSubmitting={isSubmitting}
              >
                {isSubmitting ? 'Loading...' : 'Create your Account'}
              </Button>
            </form>
          )}
        </Formik>
        <Spacer top='rg' />
        <Text varient='body'>
          Already have an account? Login{' '}
          <Link
            className={styles.loginLink}
            href='/login'
          >
            here
          </Link>
          .
        </Text>
      </main>
    </div>
  );
};

export default CreateAccountSection;
