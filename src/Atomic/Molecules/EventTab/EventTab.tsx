import React, { FC } from 'react';
import { authApiRequest } from 'utils/authApiRequest';
import { Text, Spacer, Button } from '@atomic';
import { IEvent } from 'types';
import { Formik } from 'formik';
import deleteIcon from '/public/assets/icons/delete.svg';
import Image from 'next/image';

import styles from './EventTab.module.scss';
import { EventSchemaUpdate } from 'types/event.types';

interface IEventTabsProps {
  events: IEvent[];
}

const EventTab: FC<IEventTabsProps> = ({ events }) => {
  return (
    <div className={styles.museumSection}>
      <div className={styles.sectionTitleContainer}>
        <Text varient='h3'>Events</Text>
      </div>
      <Spacer top='rg' />
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.tableRow}>
            <div className={styles.tableTitle}>
              <Text varient='body'>Name</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Host Museum</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Image</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Image Alternative Text</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Update</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Delete</Text>
            </div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {events.map(event => {
            return (
              <Formik
                key={event.name}
                initialValues={event}
                validationSchema={EventSchemaUpdate}
                onSubmit={values => {
                  setTimeout(async () => {
                    authApiRequest({
                      resource: 'event',
                      slug: event.slug,
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
                        name='name'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <div className='error-msg'>{errors.name}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='hostMuseum'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.hostMuseum.name}
                      />
                      {touched.hostMuseum && errors.hostMuseum && (
                        <div className='error-msg'>{`${errors.hostMuseum}`}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='imgUrl'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.imgUrl}
                      />
                      {touched.imgUrl && errors.imgUrl && (
                        <div className='error-msg'>{errors.imgUrl}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='imgAlt'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.imgAlt}
                      />
                      {touched.imgAlt && errors.imgAlt && (
                        <div className='error-msg'>{errors.imgAlt}</div>
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
                            resource: 'event',
                            slug: event.slug,
                            method: 'DELETE',
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
      <Spacer top='sm' />
      <Button
        varient='cta'
        href='/event/create'
      >
        Create Event
      </Button>
    </div>
  );
};

export default EventTab;
