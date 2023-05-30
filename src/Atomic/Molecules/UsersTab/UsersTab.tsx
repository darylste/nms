import React, { FC } from 'react';
import { authApiRequest } from 'utils/authApiRequest';
import { Text, Spacer } from '@atomic';
import { IUser } from 'types';
import { Formik } from 'formik';
import deleteIcon from '/public/assets/icons/delete.svg';
import Image from 'next/image';

import styles from './UsersTab.module.scss';
import { UserSchema } from 'types/user.types';

interface IUsersTabsProps {
  users: IUser[];
}

const UsersTab: FC<IUsersTabsProps> = ({ users }) => {
  return (
    <div className={styles.museumSection}>
      <div className={styles.sectionTitleContainer}>
        <Text varient='h3'>Users</Text>
      </div>
      <Spacer top='rg' />
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.tableRow}>
            <div className={styles.tableTitle}>
              <Text varient='body'>First Name</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Last Name</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Email Address</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Role</Text>
            </div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {users.map(user => {
            return (
              <Formik
                key={user.emailAddress}
                initialValues={user}
                validationSchema={UserSchema}
                onSubmit={values => {
                  setTimeout(async () => {
                    authApiRequest({
                      resource: 'user',
                      slug: values._id,
                      method: 'PATCH',
                      body: JSON.stringify(values),
                    });
                  }, 400);
                }}
              >
                {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form
                    className={`${styles.form}, ${styles.tableRow}`}
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.tableCell}>
                      <input
                        name='firstName'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.firstName}
                      />
                      {touched.firstName && errors.firstName && (
                        <div className='error-msg'>{errors.firstName}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='lastName'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.lastName}
                      />
                      {touched.lastName && errors.lastName && (
                        <div className='error-msg'>{errors.lastName}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='emailAddress'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.emailAddress}
                      />
                      {touched.emailAddress && errors.emailAddress && (
                        <div className='error-msg'>{errors.emailAddress}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='role'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.role}
                      />
                      {touched.role && errors.role && (
                        <div className='error-msg'>{errors.role}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <button type='submit'>Update</button>
                    </div>
                    <div className={styles.tableCell}>
                      <Image
                        src={deleteIcon}
                        alt='delete icon'
                        width={20}
                        height={20}
                        onClick={() =>
                          authApiRequest({
                            resource: 'user',
                            method: 'DELETE',
                            slug: values._id,
                          })
                        }
                      />
                    </div>
                  </form>
                )}
              </Formik>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UsersTab;
