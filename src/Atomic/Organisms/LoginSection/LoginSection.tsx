import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Text, SidebarFooter, Input, Spacer, Button } from '@atomic';
import { Formik } from 'formik';
import * as yup from 'yup';
import cookie from 'js-cookie';

import styles from './LoginSection.module.scss';
import Link from 'next/link';

const LoginSection: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const router = useRouter();

  const initialValues = {
    emailAddress: '',
    password: '',
  };

  const userSchema = yup.object().shape({
    emailAddress: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Please enter your email address.'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .required('Create a password.'),
  });

  return (
    <div className={styles.loginSection}>
      <SidebarFooter />
      <main className={styles.mainSection}>
        <Text varient='h1'>Login to your Account</Text>
        <Spacer top='xl' />
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              try {
                const res = await fetch(
                  'http://127.0.0.1:3000/api/v1/users/login',
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
              <Button
                varient='form'
                fullWidth
                isSubmitting={isSubmitting}
              >
                {isSubmitting ? 'Loading...' : 'Login'}
              </Button>
            </form>
          )}
        </Formik>
        <Spacer top='rg' />
        <Text varient='body'>
          Don&apos;t have an account? Create one
          <Link
            className={styles.loginLink}
            href='/createAccount'
          >
            here
          </Link>
          .
        </Text>
      </main>
    </div>
  );
};

export default LoginSection;
