import React, { FC, useState } from 'react';
import Image from 'next/image';
import {
  MuseumTab,
  EventTab,
  Spacer,
  Text,
  CollectionsTab,
  UsersTab,
  BookingsTab,
} from '@atomic';
import { IBooking, ICollection, IEvent, IMuseum, IUser } from 'types';

import userIcon from '/public/assets/icons/user.svg';
import museumIcon from '/public/assets/icons/museum.svg';
import imagesIcon from '/public/assets/icons/images.svg';
import calendarIcon from '/public/assets/icons/calendar.svg';
import ticketIcon from '/public/assets/icons/ticket.svg';

import styles from './AdminPanel.module.scss';
import { useRouter } from 'next/router';

interface IAdminPanelProps {
  museums: IMuseum[];
  events: IEvent[];
  collections: ICollection[];
  users: IUser[];
  bookings: IBooking[];
}

type tabs = 'museums' | 'events' | 'collections' | 'users' | 'bookings';

const AdminPanel: FC<IAdminPanelProps> = ({
  museums,
  events,
  collections,
  users,
  bookings,
}) => {
  const router = useRouter();
  const selectedTab = router.query.tab as tabs;

  const tabContent: Record<tabs, React.ReactElement> = {
    collections: (
      <CollectionsTab
        collections={collections}
        museums={museums}
      />
    ),
    events: <EventTab events={events} />,
    museums: <MuseumTab museums={museums} />,
    users: <UsersTab users={users} />,
    bookings: <BookingsTab bookings={bookings} />,
  };

  return (
    <section className={styles.adminPanel}>
      <div className={styles.sidebar}>
        <div
          className={styles.tab}
          onClick={() => router.push('/admin?tab=museums')}
        >
          <Image
            src={museumIcon}
            alt='museum icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          <Text varient='body'>Museums</Text>
        </div>
        <div
          className={styles.tab}
          onClick={() => router.push('/admin?tab=events')}
        >
          <Image
            src={calendarIcon}
            alt='calendar icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          <Text varient='body'>Events</Text>
        </div>
        <div
          className={styles.tab}
          onClick={() => router.push('/admin?tab=collections')}
        >
          <Image
            src={imagesIcon}
            alt='images icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          <Text varient='body'>Collections</Text>
        </div>
        <div
          className={styles.tab}
          onClick={() => router.push('/admin?tab=users')}
        >
          <Image
            src={userIcon}
            alt='user icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          <Text varient='body'>Users</Text>
        </div>
        <div
          className={styles.tab}
          onClick={() => router.push('/admin?tab=bookings')}
        >
          <Image
            src={ticketIcon}
            alt='ticket icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          <Text varient='body'>Bookings</Text>
        </div>
      </div>

      <div className={styles.main}>
        {tabContent[selectedTab || ('museums' as tabs)]}
      </div>
    </section>
  );
};

export default AdminPanel;
