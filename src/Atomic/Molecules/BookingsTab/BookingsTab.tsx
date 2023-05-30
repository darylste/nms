import React, { FC } from 'react';
import Image from 'next/image';
import { Text, Spacer } from '@atomic';
import { authApiRequest } from 'utils/authApiRequest';
import { IBooking } from 'types';
import { Formik } from 'formik';

import styles from './BookingsTab.module.scss';
import deleteIcon from '/public/assets/icons/delete.svg';
import { BookingSchema } from 'types/booking.types';

interface IBookingsTabProps {
  bookings: IBooking[];
}

const BookingsTab: FC<IBookingsTabProps> = ({ bookings }) => {
  return (
    <div className={styles.bookingsSection}>
      <div className={styles.sectionTitleContainer}>
        <Text varient='h3'>Bookings</Text>
      </div>
      <Spacer top='rg' />
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.tableRow}>
            <div className={styles.tableTitle}>
              <Text varient='body'>Event Name</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Number of Premium Adult Tickets</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Number of Premium Child Tickets</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Number of Standard Adult Tickets</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Number of Standard Child Tickets</Text>
            </div>{' '}
            <div className={styles.tableTitle}>
              <Text varient='body'>Update</Text>
            </div>{' '}
            <div className={styles.tableTitle}>
              <Text varient='body'>Delete</Text>
            </div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {bookings.map(booking => {
            return (
              <Formik
                key={booking._id}
                initialValues={booking}
                validationSchema={BookingSchema}
                onSubmit={values => {
                  setTimeout(async () => {
                    authApiRequest({
                      resource: 'booking',
                      slug: values._id,
                      method: 'PATCH',
                      body: JSON.stringify(values),
                    });
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
                }) => (
                  <form
                    className={`${styles.form}, ${styles.tableRow}`}
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.tableCell}>
                      <input
                        name='event'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.event.name}
                      />
                      {touched.event && errors.event && (
                        <div className='error-msg'>{`${errors.event}`}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='numPremiumAdultTickets'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.numPremiumAdultTickets}
                      />
                      {touched.numPremiumAdultTickets &&
                        errors.numPremiumAdultTickets && (
                          <div className='error-msg'>
                            {errors.numPremiumAdultTickets}
                          </div>
                        )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='numPremiumChildTickets'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.numPremiumChildTickets}
                      />
                      {touched.numPremiumChildTickets &&
                        errors.numPremiumChildTickets && (
                          <div className='error-msg'>
                            {errors.numPremiumChildTickets}
                          </div>
                        )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='numStandardAdultTickets'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.numStandardAdultTickets}
                      />
                      {touched.numStandardAdultTickets &&
                        errors.numStandardAdultTickets && (
                          <div className='error-msg'>
                            {errors.numStandardAdultTickets}
                          </div>
                        )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='numStandardChildTickets'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.numStandardChildTickets}
                      />
                      {touched.numStandardChildTickets &&
                        errors.numStandardChildTickets && (
                          <div className='error-msg'>
                            {errors.numStandardChildTickets}
                          </div>
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
                            resource: 'booking',
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

export default BookingsTab;
