import React, { FC } from 'react';
import { Text, SidebarFooter, Input, Spacer, Button } from '@atomic';

import styles from './CreateAccountSection.module.scss';

const CreateAccountSection: FC = () => {
  return (
    <div className={styles.createAccountSection}>
      <SidebarFooter />
      <main className={styles.mainSection}>
        <Text varient='h1'>Create an Account</Text>
        <Spacer top='xl' />
        <form
          className={styles.form}
          action=''
          method=''
        >
          <div className={styles.doubleInputContainer}>
            <Input
              name='firstName'
              placeholder='First Name'
              type='text'
              width='half'
            />
            <Input
              name='lastName'
              placeholder='Last Name'
              type='text'
              width='half'
            />
          </div>
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
          <Input
            name='confrimPassword'
            placeholder='Confirm Password'
            type='password'
            width='full'
          />
          <Button
            href='#'
            varient='cta'
            fullWidth
          >
            Create your Account
          </Button>
        </form>
        <Spacer top='rg' />
        <Text varient='body'>
          Already have an account? Login{' '}
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
