import React, { FC } from 'react';
import { Input, Text } from '@atomic';

import styles from './BookingOverlay.module.scss';

const BookingOverlay: FC = () => {
  return (
    <div className={styles.pageBlur}>
      <div className={styles.bookingOverlay}>
        <Text varient='h2'>Event Name</Text>
        <Text varient='h5'>Host Museum</Text>
        <div className={styles.left}>
          <Input
            name='adultTickets'
            placeholder='# Adult Tickets'
            type='number'
            width='full'
          />
          <Input
            name='childTicket'
            placeholder='# Child Tickets'
            type='number'
            width='full'
          />
        </div>
        <div className={styles.right}>
          <Text varient='h4'>Booking Confirmation</Text>
          <div className={styles.row}>
            <Text varient='body'>2x Standard Adult Ticket</Text>
            <Text varient='body'>£25.98</Text>
          </div>
          <div className={styles.row}>
            <Text varient='body'>1x Standard Child Ticket</Text>
            <Text varient='body'>£8.00</Text>
          </div>
          <div className={styles.row}>
            <Text varient='button'>Total</Text>
            <Text varient='body'>£8.00</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOverlay;
