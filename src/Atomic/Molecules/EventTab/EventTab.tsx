import React, { FC } from 'react';
import { authApiRequest } from 'utils/authApiRequest';
import { Text, Spacer, Button } from '@atomic';
import { IEvent } from 'types';
import { Formik } from 'formik';
import deleteIcon from '/public/assets/icons/delete.svg';
import Image from 'next/image';

import styles from './EventTab.module.scss';

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
              <Text varient='body'>Location</Text>
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
                {({ values, handleChange, handleBlur, handleSubmit }) => (
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
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='location'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.hostMuseum.location}
                      />
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='imgUrl'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.imgUrl}
                      />
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='imgAlt'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.imgAlt}
                      />
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
