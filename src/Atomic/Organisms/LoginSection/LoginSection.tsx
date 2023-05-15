import React, { FC } from 'react';
import { Text, SidebarFooter, Input, Spacer, Button } from '@atomic';

import styles from './LoginSection.module.scss';

const CreateAccountSection: FC = () => {
  return (
    <div className={styles.loginSection}>
      <SidebarFooter />
      <main className={styles.mainSection}>
        <Text varient='h1'>Login to your Account</Text>
        <Spacer top='xl' />
        <form
          className={styles.form}
          action=''
          method=''
        >
          <Input
            name='emailAddress'
            placeholder='Email Address'
            type='email'
            width='full'
          />
          <Input
            name='password'
            placeholder='Password'
            type='password'
            width='full'
          />

          <Button
            href='#'
            varient='cta'
            fullWidth
          >
            Login
          </Button>
        </form>
        <Spacer top='rg' />
        <Text varient='body'>
          Don&apos;t have an account? Create one{' '}
          <a
            className={styles.loginLink}
            href='#'
          >
            here
          </a>
          .
        </Text>
      </main>
    </div>
  );
};

export default CreateAccountSection;
